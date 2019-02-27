// GET A SPECIFIC JOB MEASUREMENT:
// https://sandbox.hover.to/api/v2/jobs/610/measurements.json?version=summarized_json
// Note: This summarized version is only applicable to JSON measurement returns. Other measurements can be returned (pdf, xlsx, or xml) by changing the extension.

export const mockJobMeasurements = {
  area: {
    facades: {
      siding: 3350,
      other: 0
    },
    openings: {
      siding: 205,
      other: 0
    },
    unknown: {
      siding: null,
      other: 0
    },
    total: {
      siding: 3555,
      other: 0
    }
  },
  openings: {
    quantity: {
      siding: 2,
      other: 0
    },
    tops_length: {
      siding: 17.67,
      other: 0
    },
    sills_length: {
      siding: 3.08,
      other: 0
    },
    sides_length: {
      siding: 40,
      other: 0
    },
    total_perimeter: {
      siding: 60.75,
      other: 0
    }
  },
  siding_waste: {
    zero: 3350,
    plus_10_percent: 3685,
    plus_18_percent: 3953,
    with_openings: 3368,
    openings_plus_10_percent: 3705,
    openings_plus_18_percent: 3974
  },
  trim: {
    level_starter: {
      siding: 201.58,
      other: 0
    },
    sloped_trim: {
      siding: 0,
      other: 0
    },
    vertical_trim: {
      siding: 0,
      other: 0
    }
  },
  roofline: {
    eaves_fascia: {
      length: 120,
      avg_depth: null,
      soffit_area: null
    },
    level_frieze_board: {
      length: 119.33,
      avg_depth: 0.17,
      soffit_area: 16
    },
    rakes_fascia: {
      length: 103.92,
      avg_depth: null,
      soffit_area: null
    },
    sloped_frieze_board: {
      length: 103.92,
      avg_depth: 0.17,
      soffit_area: 16
    }
  },
  corners: {
    inside_corners_qty: {
      siding: 0,
      other: null
    },
    inside_corners_len: {
      siding: 0,
      other: null
    },
    outside_corners_qty: {
      siding: 4,
      other: null
    },
    outside_corners_len: {
      siding: 58.5,
      other: null
    }
  },
  accessories: {
    shutter_qty: {
      siding: 0,
      other: 0
    },
    shutter_area: {
      siding: 0,
      other: 0
    },
    vents_qty: {
      siding: 0,
      other: 0
    },
    vents_area: {
      siding: 0,
      other: 0
    }
  },
  roof: {
    roof_facets: {
      area: 3118,
      total: 2,
      length: null
    },
    ridges_hips: {
      area: null,
      total: 1,
      length: 60
    },
    valleys: {
      area: null,
      total: 0,
      length: 0
    },
    rakes: {
      area: null,
      total: 4,
      length: 103.92
    },
    gutters_eaves: {
      area: null,
      total: 2,
      length: 120
    },
    flashing: {
      area: null,
      total: 0,
      length: 0
    },
    step_flashing: {
      area: null,
      total: 0,
      length: 0
    },
    pitch: [
      {
        roof_pitch: "4/12",
        area: 3118,
        percentage: 100
      }
    ],
    waste_factor: {
      area: {
        zero: 3118,
        plus_5_percent: 3274,
        plus_10_percent: 3430,
        plus_15_percent: 3586,
        plus_20_percent: 3742
      }
    }
  }
};
