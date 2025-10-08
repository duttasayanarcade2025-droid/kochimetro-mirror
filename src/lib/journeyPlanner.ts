import { Station, stations } from '@/data/stationsData';

export interface JourneySegment {
  line: string;
  stations: Station[];
  duration: number;
}

export interface JourneyResult {
  segments: JourneySegment[];
  totalDuration: number;
  fare: number;
  requiresTransfer: boolean;
  transferStation?: Station;
  totalStops: number;
}

// Graph structure for routing
interface GraphNode {
  station: Station;
  connections: { node: GraphNode; line: string; weight: number }[];
}

// Build station graph
const buildStationGraph = (): Map<string, GraphNode> => {
  const graph = new Map<string, GraphNode>();
  
  // Create nodes
  stations.forEach(station => {
    graph.set(station.id, { station, connections: [] });
  });
  
  // Create connections within same line
  const line1Stations = stations.filter(s => s.line === 'Line 1').sort((a, b) => a.distance - b.distance);
  const line2Stations = stations.filter(s => s.line === 'Line 2').sort((a, b) => a.distance - b.distance);
  
  [line1Stations, line2Stations].forEach(lineStations => {
    for (let i = 0; i < lineStations.length - 1; i++) {
      const currentNode = graph.get(lineStations[i].id)!;
      const nextNode = graph.get(lineStations[i + 1].id)!;
      
      // Bidirectional connection
      currentNode.connections.push({ node: nextNode, line: lineStations[i].line, weight: 2 }); // 2 min per station
      nextNode.connections.push({ node: currentNode, line: lineStations[i].line, weight: 2 });
    }
  });
  
  // Add transfer connections (Aluva is the interchange)
  const aluvaLine1 = graph.get('aluva');
  const aluvaLine2 = graph.get('aluva-line2');
  
  if (aluvaLine1 && aluvaLine2) {
    aluvaLine1.connections.push({ node: aluvaLine2, line: 'Transfer', weight: 5 }); // 5 min transfer
    aluvaLine2.connections.push({ node: aluvaLine1, line: 'Transfer', weight: 5 });
  }
  
  return graph;
};

// Dijkstra's algorithm for shortest path
const findShortestPath = (from: Station, to: Station): { path: Station[]; duration: number } | null => {
  const graph = buildStationGraph();
  const distances = new Map<string, number>();
  const previous = new Map<string, string>();
  const unvisited = new Set<string>();
  
  // Initialize
  stations.forEach(station => {
    distances.set(station.id, Infinity);
    unvisited.add(station.id);
  });
  distances.set(from.id, 0);
  
  while (unvisited.size > 0) {
    // Find unvisited node with smallest distance
    let currentId = '';
    let smallestDistance = Infinity;
    unvisited.forEach(id => {
      const dist = distances.get(id)!;
      if (dist < smallestDistance) {
        smallestDistance = dist;
        currentId = id;
      }
    });
    
    if (currentId === '' || smallestDistance === Infinity) break;
    if (currentId === to.id) break;
    
    unvisited.delete(currentId);
    const currentNode = graph.get(currentId)!;
    
    // Update distances to neighbors
    currentNode.connections.forEach(({ node, weight }) => {
      if (unvisited.has(node.station.id)) {
        const newDistance = distances.get(currentId)! + weight;
        if (newDistance < distances.get(node.station.id)!) {
          distances.set(node.station.id, newDistance);
          previous.set(node.station.id, currentId);
        }
      }
    });
  }
  
  // Reconstruct path
  if (!previous.has(to.id) && from.id !== to.id) return null;
  
  const path: Station[] = [];
  let currentId = to.id;
  
  while (currentId) {
    const station = stations.find(s => s.id === currentId);
    if (station) path.unshift(station);
    currentId = previous.get(currentId) || '';
  }
  
  return {
    path,
    duration: distances.get(to.id) || 0
  };
};

// Calculate fare based on distance
const calculateFare = (distance: number): number => {
  if (distance <= 2) return 10;
  if (distance <= 5) return 20;
  if (distance <= 10) return 30;
  if (distance <= 15) return 40;
  return 50;
};

// Main journey planner function
export const planJourney = (fromStationId: string, toStationId: string): JourneyResult | null => {
  const from = stations.find(s => s.id === fromStationId);
  const to = stations.find(s => s.id === toStationId);
  
  if (!from || !to) return null;
  
  const result = findShortestPath(from, to);
  if (!result) return null;
  
  const { path, duration } = result;
  
  // Split path into segments by line
  const segments: JourneySegment[] = [];
  let currentSegment: Station[] = [path[0]];
  let currentLine = path[0].line;
  
  for (let i = 1; i < path.length; i++) {
    if (path[i].line === currentLine) {
      currentSegment.push(path[i]);
    } else {
      // Line change - finalize current segment
      segments.push({
        line: currentLine,
        stations: currentSegment,
        duration: (currentSegment.length - 1) * 2
      });
      currentSegment = [path[i]];
      currentLine = path[i].line;
    }
  }
  
  // Add final segment
  if (currentSegment.length > 0) {
    segments.push({
      line: currentLine,
      stations: currentSegment,
      duration: (currentSegment.length - 1) * 2
    });
  }
  
  // Detect transfer
  const requiresTransfer = segments.length > 1;
  const transferStation = requiresTransfer ? segments[0].stations[segments[0].stations.length - 1] : undefined;
  
  // Calculate total distance for fare
  const totalDistance = Math.abs(from.distance - to.distance);
  const fare = calculateFare(totalDistance);
  
  return {
    segments,
    totalDuration: Math.ceil(duration + 1), // Add 1 min initial wait
    fare,
    requiresTransfer,
    transferStation,
    totalStops: path.length - 1
  };
};
