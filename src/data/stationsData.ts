export interface StationFacility {
  parking: boolean;
  wifi: boolean;
  restrooms: boolean;
  elevator: boolean;
  escalator: boolean;
  disabledAccess: boolean;
  atm: boolean;
  foodCourt: boolean;
}

export interface Station {
  id: string;
  name: string;
  code: string;
  line: "Line 1" | "Line 2";
  coordinates: {
    lat: number;
    lng: number;
  };
  facilities: StationFacility;
  operatingHours: {
    weekday: string;
    weekend: string;
  };
  nearbyLandmarks: string[];
  distance: number; // km from Aluva
}

export const stations: Station[] = [
  // Line 1 stations
  {
    id: "aluva",
    name: "Aluva",
    code: "ALV",
    line: "Line 1",
    coordinates: { lat: 10.1092, lng: 76.3496 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Aluva Mahadeva Temple", "Periyar River", "Union Christian College"],
    distance: 0
  },
  {
    id: "pulinchodu",
    name: "Pulinchodu",
    code: "PUL",
    line: "Line 1",
    coordinates: { lat: 10.0985, lng: 76.3512 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Aluva Market", "Industrial Area"],
    distance: 1.2
  },
  {
    id: "companypady",
    name: "Companypady",
    code: "CPD",
    line: "Line 1",
    coordinates: { lat: 10.0802, lng: 76.3568 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Companypady Junction", "Residential Area"],
    distance: 2.4
  },
  {
    id: "ambattukavu",
    name: "Ambattukavu",
    code: "AMB",
    line: "Line 1",
    coordinates: { lat: 10.0702, lng: 76.3625 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Ambattukavu Temple", "Commercial Complex"],
    distance: 3.6
  },
  {
    id: "muttom",
    name: "Muttom",
    code: "MTM",
    line: "Line 1",
    coordinates: { lat: 10.0598, lng: 76.3689 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Muttom Junction", "Schools"],
    distance: 4.8
  },
  {
    id: "kalamassery",
    name: "Kalamassery",
    code: "KLM",
    line: "Line 1",
    coordinates: { lat: 10.0525, lng: 76.3745 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Kalamassery Town", "KINFRA Park", "Small Industries"],
    distance: 6
  },
  {
    id: "cochin-university",
    name: "Cochin University",
    code: "CUN",
    line: "Line 1",
    coordinates: { lat: 10.0458, lng: 76.3812 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["CUSAT Campus", "Technology Park", "University Library"],
    distance: 7.2
  },
  {
    id: "pathadipalam",
    name: "Pathadipalam",
    code: "PTH",
    line: "Line 1",
    coordinates: { lat: 10.0312, lng: 76.3956 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Pathadipalam Junction", "Residential Area"],
    distance: 8.4
  },
  {
    id: "edapally",
    name: "Edapally",
    code: "EDP",
    line: "Line 1",
    coordinates: { lat: 10.0258, lng: 76.3089 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Lulu Mall", "Edapally Church", "Oberon Mall"],
    distance: 9.6
  },
  {
    id: "changampuzha-park",
    name: "Changampuzha Park",
    code: "CHP",
    line: "Line 1",
    coordinates: { lat: 10.0145, lng: 76.3145 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Changampuzha Park", "IT Parks"],
    distance: 10.8
  },
  {
    id: "palarivattom",
    name: "Palarivattom",
    code: "PLV",
    line: "Line 1",
    coordinates: { lat: 10.0062, lng: 76.3095 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Palarivattom Flyover", "Commercial Hub"],
    distance: 12
  },
  {
    id: "jln-stadium",
    name: "JLN Stadium",
    code: "JLN",
    line: "Line 1",
    coordinates: { lat: 9.9985, lng: 76.2989 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Jawaharlal Nehru Stadium", "Sports Complex"],
    distance: 13.2
  },
  {
    id: "kaloor",
    name: "Kaloor",
    code: "KLR",
    line: "Line 1",
    coordinates: { lat: 9.9895, lng: 76.2912 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Kaloor Bus Stand", "Kaloor Stadium", "Shopping Areas"],
    distance: 14.4
  },
  {
    id: "town-hall",
    name: "Town Hall",
    code: "TWH",
    line: "Line 1",
    coordinates: { lat: 9.9812, lng: 76.2856 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Ernakulam Town Hall", "Durbar Hall Ground"],
    distance: 15.6
  },
  {
    id: "mg-road",
    name: "M.G Road",
    code: "MGR",
    line: "Line 1",
    coordinates: { lat: 9.9745, lng: 76.2823 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Broadway", "Marine Drive", "Shopping District"],
    distance: 16.8
  },
  {
    id: "maharajas-college",
    name: "Maharaja's College",
    code: "MHC",
    line: "Line 1",
    coordinates: { lat: 9.9689, lng: 76.2789 },
    facilities: {
      parking: false,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Maharaja's College", "Fort Kochi Road"],
    distance: 18
  },
  {
    id: "ernakulam-south",
    name: "Ernakulam South",
    code: "ERS",
    line: "Line 1",
    coordinates: { lat: 9.9658, lng: 76.2756 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Ernakulam South Railway Station", "Bus Terminal"],
    distance: 19.2
  },

  // Line 2 stations
  {
    id: "kadavanthra",
    name: "Kadavanthra",
    code: "KDV",
    line: "Line 2",
    coordinates: { lat: 9.9658, lng: 76.2923 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Kadavanthra Junction", "Residential Areas"],
    distance: 0
  },
  {
    id: "elamkulam",
    name: "Elamkulam",
    code: "ELM",
    line: "Line 2",
    coordinates: { lat: 9.9589, lng: 76.2989 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Elamkulam Market", "Schools"],
    distance: 1.2
  },
  {
    id: "vytilla",
    name: "Vytilla",
    code: "VYT",
    line: "Line 2",
    coordinates: { lat: 9.9512, lng: 76.3123 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Vytilla Hub", "Vytilla Mobility Hub", "Shopping Complex"],
    distance: 2.4
  },
  {
    id: "thaikoodam",
    name: "Thaikoodam",
    code: "THK",
    line: "Line 2",
    coordinates: { lat: 9.9445, lng: 76.3189 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Thaikoodam Junction"],
    distance: 3.6
  },
  {
    id: "petta",
    name: "Petta",
    code: "PTA",
    line: "Line 2",
    coordinates: { lat: 9.9378, lng: 76.3256 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Petta Market", "Commercial Area"],
    distance: 4.8
  },
  {
    id: "vadakkekotta",
    name: "Vadakkekotta",
    code: "VKT",
    line: "Line 2",
    coordinates: { lat: 9.9312, lng: 76.3323 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: false,
      disabledAccess: true,
      atm: false,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Vadakkekotta Temple"],
    distance: 6
  },
  {
    id: "sn-junction",
    name: "SN Junction",
    code: "SNJ",
    line: "Line 2",
    coordinates: { lat: 9.9245, lng: 76.3389 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: false
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["SN Junction", "Bus Stand"],
    distance: 7.2
  },
  {
    id: "tripunithura",
    name: "Tripunithura",
    code: "TRP",
    line: "Line 2",
    coordinates: { lat: 9.9178, lng: 76.3456 },
    facilities: {
      parking: true,
      wifi: true,
      restrooms: true,
      elevator: true,
      escalator: true,
      disabledAccess: true,
      atm: true,
      foodCourt: true
    },
    operatingHours: {
      weekday: "5:45 AM - 10:00 PM",
      weekend: "6:00 AM - 10:00 PM"
    },
    nearbyLandmarks: ["Hill Palace Museum", "Tripunithura Town", "Heritage Sites"],
    distance: 8.4
  }
];

export const getStationByCode = (code: string): Station | undefined => {
  return stations.find(s => s.code === code);
};

export const getStationsByLine = (line: "Line 1" | "Line 2"): Station[] => {
  return stations.filter(s => s.line === line);
};
