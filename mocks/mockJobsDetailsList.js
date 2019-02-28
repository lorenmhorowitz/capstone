/*
Schema summary: 
      name: 
      validUsers: 
      customer_notes:
      location_line_1: 
      location_line_2: 
      location_city: 
      location_region:
      location_postal_code:
      location_country:
      id: 
      property_type: 
      updated_at: 
      completed_at: 
      created_at: 
      job_status: 
      active_projects: {
        roofing: 
        siding: 
        windows: 
      },
      measurements: {
        roof: 
      },
      products: {
        roofing: {
          shingles: []
          underlayment: []
          nails: []   
          ridgeCaps: []
          dripEdge: []
        },
        siding: {
          siding: []
          nails: []
        },
        windows: {
          window: []
          frame: []
          framekit: []
        }
      }

*/

export const mockJobsDetailsList = {
  pagination: {
    current_page: 1,
    total_pages: 1,
    total: 2
  },
  results: [
    {
      name: "Josh Feener Residence",
      validUsers: ["jfeener"],
      customer_notes: null,
      location_line_1: "1119 W 32nd Street",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98660",
      location_country: null,
      id: 610,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:48:12.428Z",
      completed_at: "2018-08-17T14:48:12.428Z",
      created_at: "2018-08-17T14:48:12.428Z",
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3118,
            total: 2,
            length: 0
          },
          ridges_hips: {
            area: 0,
            total: 1,
            length: 60
          },
          valleys: {
            area: 0,
            total: 0,
            length: 0
          },
          rakes: {
            area: 0,
            total: 4,
            length: 103.92
          },
          gutters_eaves: {
            area: 0,
            total: 2,
            length: 120
          },
          flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          pitch: [
            {
              roof_pitch: "4/12",
              area: 3118,
              percentage: 100
            }
          ]
        }
      },
      products: {
        roofing: {
          shingles: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 205655916,
                  selected: false,
                  model: "786353",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 33, //ft.
                    length: 33, //ft.
                    thickness: 7.4, //in.
                    width: 7.5 //ft.
                  },
                  weight: 13.5, //lbs
                  color: "Black",
                  quantity: 3,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 205655965,
                  selected: false,
                  model: "TD01",
                  brand: "Owens Corning",
                  name: "TruDefinition Duration Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/36828037-7dec-4892-9d91-3f4419afce00/svn/onyx-black-owens-corning-roof-shingles-td01-64_1000.jpg",
                  price: 29.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 72, //lbs
                  color: "Black",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 15,
              products: [
                {
                  item_id: 205658438,
                  selected: false,
                  model: "HL20",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Estate Gray Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/929752d0-bd75-4870-b1e4-15e9ac3719ef/svn/estate-gray-owens-corning-roof-shingles-hl20-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 74, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            }
          ],
          underlayment: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 205035868,
                  selected: false,
                  model: "0973",
                  brand: "GAF",
                  name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 79.00,
                  dimensions: {
                    area: 1000, //ft.
                    length: 250, //ft.
                    thickness: 6.0, //in.
                    width: 48 //ft.
                  },
                  weight: 23, //lbs
                  color: "grey",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            }

          ],
          ridgeCaps: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300573201,
                  selected: false,
                  model: "5259",
                  brand: "Ondura",
                  name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
                  image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
                  price: 8.00,
                  dimensions: {
                    area: 3.4,
                    length: 39.5,
                    thickness: 0.125,
                    width: 12.5,
                  },
                  weight: 2.05, //lbs 
                  color: "Tan",
                  quantity: 5,
                }
              ]
            }
          ],
          dripEdge: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 202093168,
                  selected: false,
                  model: "RE15WH",
                  brand: "Construction Metals",
                  name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
                  image: "https://images.homedepot-static.com/productImages/06b578fd-7346-43d8-8209-91dda4953220/svn/construction-metals-drip-edge-flashing-re15wh-64_1000.jpg",
                  price: 4.70,
                  dimensions: {
                    area: 1.5,
                    length: 120,
                    thickness: 0.015625,
                    width: 1.5,
                  },
                  weight: 1.6, //lbs 
                  color: "White",
                  quantity: 2,
                }
              ]
            }
          ]
        },
        siding: {
          siding: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 305218602,
                  selected: false,
                  model: "US09-16-LG-S",
                  brand: "NewTechWood",
                  name: "All Weather System 0.5 in. x 5.5 in. x 1 ft. Westminster Gray Composite Siding Sample Board",
                  image: "https://images.homedepot-static.com/productImages/9a56db62-c660-4460-b052-5601822e59e3/svn/gray-newtechwood-composite-siding-us09-16-lg-s-64_1000.jpg",
                  price: 3.00,
                  dimensions: {
                    area: 3.33, //ft.
                    length: 12, //ft.
                    thickness: 0.5, //in.
                    width: 6 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 301837334,
                  selected: false,
                  model: "PC4004H",
                  brand: "Ply Gem",
                  name: "Transformations Double 4 in. x 150 in. White Vinyl Lap Siding",
                  image: "https://images.homedepot-static.com/productImages/89f2ead0-37fb-4608-9bfb-3354bbe7b782/svn/white-ply-gem-vinyl-siding-pc4004h-64_1000.jpg",
                  price: 170.00,
                  dimensions: {
                    area: 10.64, //ft.
                    length: 150, //ft.
                    thickness: 0.040, //in.
                    width: 9.23 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 25,
              products: [
                {
                  item_id: 100055901,
                  selected: false,
                  model: "27874",
                  brand: "LP SmartSide",
                  name: "SmartSide 48 in. x 96 in. Strand Panel Siding",
                  image: "https://images.homedepot-static.com/productImages/c4332a11-65f7-4223-a3c9-9596b8ec44f3/svn/primed-lp-smartside-composite-siding-27874-64_1000.jpg",
                  price: 34.74,
                  dimensions: {
                    area: 32, //ft.
                    length: 96, //ft.
                    thickness: 0.315, //in.
                    width: 48.56 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Brown",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            },
          ],
        },
        windows: {
          window: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300702260,
                  selected: false,
                  model: "THDJW177200528",
                  brand: "JELD-WEN",
                  name: "37.375 in. x 60 in. W-2500 Series White Painted Clad Wood Double Hung Window w/ Natural Interior and Screen",
                  image: "https://images.homedepot-static.com/productImages/799fb844-3293-41a2-8d16-1ac07b45695e/svn/jeld-wen-double-hung-windows-thdjw177200528-64_1000.jpg",
                  price: 476.35,
                  dimensions: {
                    width: 37.375,
                    height: 60
                  },
                  weight: 58.42, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 7203157489,
                  selected: false,
                  model: "70 SLIDER BUCK",
                  brand: "American Craftsman",
                  name: "36 in. x 24 in. 70 Series Universal/Reversible Sliding White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/b7db059d-3900-419d-8432-a24d5d0fd735/svn/american-craftsman-sliding-windows-70-slider-buck-64_1000.jpg",
                  price: 88.96,
                  dimensions: {
                    width: 36,
                    height: 24
                  },
                  weight: 24, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 204814543,
                  selected: false,
                  model: "2438786",
                  brand: "American Craftsman",
                  name: "23.75 in. x 40 in. 70 Series Pro Double Hung White Vinyl Window",
                  image: "https://images.homedepot-static.com/productImages/a5868b23-b76a-4a81-adc0-e7ccdfeeb065/svn/american-craftsman-double-hung-windows-2438786-64_1000.jpg",
                  price: 129.00,
                  dimensions: {
                    width: 23.75,
                    height: 40
                  },
                  weight: 25, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          frame: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 204814577,
                  selected: false,
                  model: "2846786",
                  brand: "American Craftsman",
                  name: "27.75 in. x 45.25 in. 70 Series Pro Double Hung White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/26477954-fce2-4d40-8197-bfa073d9319c/svn/american-craftsman-double-hung-windows-2846786-64_1000.jpg",
                  price: 147.00,
                  dimensions: {
                    width: 27.75, //ft.
                    height: 45.25,
                  },
                  weight: 30, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          framekit: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 206613149,
                  selected: false,
                  model: "BSKIT51660",
                  brand: "Screen Tight",
                  name: "5/16 in. x 60 in. Brown Window Screen Frame Kit",
                  image: "https://images.homedepot-static.com/productImages/87897639-da0e-49ed-a0c7-c78f02e62a2e/svn/brown-screen-tight-window-screens-bskit51660-64_1000.jpg",
                  price: 13.28,
                  dimensions: {
                    width: .3125, //ft.
                    length: 60, //ft.
                  },
                  weight: 2, //lbs 
                  color: "Bronze",
                  quantity: 1,
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: "Max Ellis Residence",
      validUsers: ["mellis"],
      customer_notes: null,
      location_line_1: "3401 NW 9th Avenue",
      location_line_2: null,
      location_city: "Camas",
      location_region: "WA",
      location_postal_code: "98607",
      location_country: null,
      id: 611,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:51:12.428Z",
      completed_at: "2018-08-17T14:51:12.428Z",
      created_at: "2018-08-17T14:51:12.428Z",
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3123,
            total: 3,
            length: 0
          },
          ridges_hips: {
            area: 2,
            total: 2,
            length: 50
          },
          valleys: {
            area: 0,
            total: 0,
            length: 0
          },
          rakes: {
            area: 0,
            total: 4,
            length: 100.0
          },
          gutters_eaves: {
            area: 0,
            total: 3,
            length: 90
          },
          flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          pitch: [
            {
              roof_pitch: "3/8",
              area: 3008,
              percentage: 200
            }
          ]
        }
      },
      products: {
        roofing: {
          shingles: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 205655916,
                  selected: false,
                  model: "786353",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 33, //ft.
                    length: 33, //ft.
                    thickness: 7.4, //in.
                    width: 7.5 //ft.
                  },
                  weight: 13.5, //lbs
                  color: "Black",
                  quantity: 3,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 205655965,
                  selected: false,
                  model: "TD01",
                  brand: "Owens Corning",
                  name: "TruDefinition Duration Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/36828037-7dec-4892-9d91-3f4419afce00/svn/onyx-black-owens-corning-roof-shingles-td01-64_1000.jpg",
                  price: 29.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 72, //lbs
                  color: "Black",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 15,
              products: [
                {
                  item_id: 205658438,
                  selected: false,
                  model: "HL20",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Estate Gray Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/929752d0-bd75-4870-b1e4-15e9ac3719ef/svn/estate-gray-owens-corning-roof-shingles-hl20-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 74, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            }
          ],
          underlayment: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 205035868,
                  selected: false,
                  model: "0973",
                  brand: "GAF",
                  name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 79.00,
                  dimensions: {
                    area: 1000, //ft.
                    length: 250, //ft.
                    thickness: 6.0, //in.
                    width: 48 //ft.
                  },
                  weight: 23, //lbs
                  color: "grey",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            }

          ],
          ridgeCaps: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300573201,
                  selected: false,
                  model: "5259",
                  brand: "Ondura",
                  name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
                  image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
                  price: 8.00,
                  dimensions: {
                    area: 3.4,
                    length: 39.5,
                    thickness: 0.125,
                    width: 12.5,
                  },
                  weight: 2.05, //lbs 
                  color: "Tan",
                  quantity: 5,
                }
              ]
            }
          ],
          dripEdge: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 202093168,
                  selected: false,
                  model: "RE15WH",
                  brand: "Construction Metals",
                  name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
                  image: "https://www.homedepot.com/p/Construction-Metals-1-1-2-in-x-1-1-2-in-x-10-ft-Galvanized-Steel-Drip-Edge-Flashing-in-White-RE15WH/202093168",
                  price: 4.70,
                  dimensions: {
                    area: 1.5,
                    length: 120,
                    thickness: 0.015625,
                    width: 1.5,
                  },
                  weight: 1.6, //lbs 
                  color: "White",
                  quantity: 2,
                }
              ]
            }
          ]
        },
        siding: {
          siding: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 305218602,
                  selected: false,
                  model: "US09-16-LG-S",
                  brand: "NewTechWood",
                  name: "All Weather System 0.5 in. x 5.5 in. x 1 ft. Westminster Gray Composite Siding Sample Board",
                  image: "https://images.homedepot-static.com/productImages/9a56db62-c660-4460-b052-5601822e59e3/svn/gray-newtechwood-composite-siding-us09-16-lg-s-64_1000.jpg",
                  price: 3.00,
                  dimensions: {
                    area: 3.33, //ft.
                    length: 12, //ft.
                    thickness: 0.5, //in.
                    width: 6 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 301837334,
                  selected: false,
                  model: "PC4004H",
                  brand: "Ply Gem",
                  name: "Transformations Double 4 in. x 150 in. White Vinyl Lap Siding",
                  image: "https://images.homedepot-static.com/productImages/89f2ead0-37fb-4608-9bfb-3354bbe7b782/svn/white-ply-gem-vinyl-siding-pc4004h-64_1000.jpg",
                  price: 170.00,
                  dimensions: {
                    area: 10.64, //ft.
                    length: 150, //ft.
                    thickness: 0.040, //in.
                    width: 9.23 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 25,
              products: [
                {
                  item_id: 100055901,
                  selected: false,
                  model: "27874",
                  brand: "LP SmartSide",
                  name: "SmartSide 48 in. x 96 in. Strand Panel Siding",
                  image: "https://images.homedepot-static.com/productImages/c4332a11-65f7-4223-a3c9-9596b8ec44f3/svn/primed-lp-smartside-composite-siding-27874-64_1000.jpg",
                  price: 34.74,
                  dimensions: {
                    area: 32, //ft.
                    length: 96, //ft.
                    thickness: 0.315, //in.
                    width: 48.56 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Brown",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            },
          ],
        },
        windows: {
          window: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300702260,
                  selected: false,
                  model: "THDJW177200528",
                  brand: "JELD-WEN",
                  name: "37.375 in. x 60 in. W-2500 Series White Painted Clad Wood Double Hung Window w/ Natural Interior and Screen",
                  image: "https://images.homedepot-static.com/productImages/799fb844-3293-41a2-8d16-1ac07b45695e/svn/jeld-wen-double-hung-windows-thdjw177200528-64_1000.jpg",
                  price: 476.35,
                  dimensions: {
                    width: 37.375,
                    height: 60
                  },
                  weight: 58.42, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 7203157489,
                  selected: false,
                  model: "70 SLIDER BUCK",
                  brand: "American Craftsman",
                  name: "36 in. x 24 in. 70 Series Universal/Reversible Sliding White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/b7db059d-3900-419d-8432-a24d5d0fd735/svn/american-craftsman-sliding-windows-70-slider-buck-64_1000.jpg",
                  price: 88.96,
                  dimensions: {
                    width: 36,
                    height: 24
                  },
                  weight: 24, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 204814543,
                  selected: false,
                  model: "2438786",
                  brand: "American Craftsman",
                  name: "23.75 in. x 40 in. 70 Series Pro Double Hung White Vinyl Window",
                  image: "https://images.homedepot-static.com/productImages/a5868b23-b76a-4a81-adc0-e7ccdfeeb065/svn/american-craftsman-double-hung-windows-2438786-64_1000.jpg",
                  price: 129.00,
                  dimensions: {
                    width: 23.75,
                    height: 40
                  },
                  weight: 25, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          frame: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 204814577,
                  selected: false,
                  model: "2846786",
                  brand: "American Craftsman",
                  name: "27.75 in. x 45.25 in. 70 Series Pro Double Hung White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/26477954-fce2-4d40-8197-bfa073d9319c/svn/american-craftsman-double-hung-windows-2846786-64_1000.jpg",
                  price: 147.00,
                  dimensions: {
                    width: 27.75, //ft.
                    height: 45.25,
                  },
                  weight: 30, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          framekit: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 206613149,
                  selected: false,
                  model: "BSKIT51660",
                  brand: "Screen Tight",
                  name: "5/16 in. x 60 in. Brown Window Screen Frame Kit",
                  image: "https://images.homedepot-static.com/productImages/87897639-da0e-49ed-a0c7-c78f02e62a2e/svn/brown-screen-tight-window-screens-bskit51660-64_1000.jpg",
                  price: 13.28,
                  dimensions: {
                    width: .3125, //ft.
                    length: 60, //ft.
                  },
                  weight: 2, //lbs 
                  color: "Bronze",
                  quantity: 1,
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: "Arnold Castro Residence",
      validUsers: ["acastro"],
      customer_notes: null,
      location_line_1: "13010 NE 46th Street",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98682",
      location_country: null,
      id: 612,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:56:12.428Z",
      completed_at: "2018-08-17T14:56:12.428Z",
      created_at: "2018-08-17T14:56:12.428Z",
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3118,
            total: 2,
            length: 0
          },
          ridges_hips: {
            area: 0,
            total: 1,
            length: 60
          },
          valleys: {
            area: 0,
            total: 0,
            length: 0
          },
          rakes: {
            area: 0,
            total: 4,
            length: 103.92
          },
          gutters_eaves: {
            area: 0,
            total: 2,
            length: 120
          },
          flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          pitch: [
            {
              roof_pitch: "4/12",
              area: 3118,
              percentage: 100
            }
          ]
        }
      },
      products: {
        roofing: {
          shingles: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 205655916,
                  selected: false,
                  model: "786353",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 33, //ft.
                    length: 33, //ft.
                    thickness: 7.4, //in.
                    width: 7.5 //ft.
                  },
                  weight: 13.5, //lbs
                  color: "Black",
                  quantity: 3,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 205655965,
                  selected: false,
                  model: "TD01",
                  brand: "Owens Corning",
                  name: "TruDefinition Duration Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/36828037-7dec-4892-9d91-3f4419afce00/svn/onyx-black-owens-corning-roof-shingles-td01-64_1000.jpg",
                  price: 29.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 72, //lbs
                  color: "Black",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 15,
              products: [
                {
                  item_id: 205658438,
                  selected: false,
                  model: "HL20",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Estate Gray Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/929752d0-bd75-4870-b1e4-15e9ac3719ef/svn/estate-gray-owens-corning-roof-shingles-hl20-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 74, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            }
          ],
          underlayment: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 205035868,
                  selected: false,
                  model: "0973",
                  brand: "GAF",
                  name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 79.00,
                  dimensions: {
                    area: 1000, //ft.
                    length: 250, //ft.
                    thickness: 6.0, //in.
                    width: 48 //ft.
                  },
                  weight: 23, //lbs
                  color: "grey",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            }

          ],
          ridgeCaps: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300573201,
                  selected: false,
                  model: "5259",
                  brand: "Ondura",
                  name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
                  image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
                  price: 8.00,
                  dimensions: {
                    area: 3.4,
                    length: 39.5,
                    thickness: 0.125,
                    width: 12.5,
                  },
                  weight: 2.05, //lbs 
                  color: "Tan",
                  quantity: 5,
                }
              ]
            }
          ],
          dripEdge: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 202093168,
                  selected: false,
                  model: "RE15WH",
                  brand: "Construction Metals",
                  name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
                  image: "https://www.homedepot.com/p/Construction-Metals-1-1-2-in-x-1-1-2-in-x-10-ft-Galvanized-Steel-Drip-Edge-Flashing-in-White-RE15WH/202093168",
                  price: 4.70,
                  dimensions: {
                    area: 1.5,
                    length: 120,
                    thickness: 0.015625,
                    width: 1.5,
                  },
                  weight: 1.6, //lbs 
                  color: "White",
                  quantity: 2,
                }
              ]
            }
          ]
        },
        siding: {
          siding: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 305218602,
                  selected: false,
                  model: "US09-16-LG-S",
                  brand: "NewTechWood",
                  name: "All Weather System 0.5 in. x 5.5 in. x 1 ft. Westminster Gray Composite Siding Sample Board",
                  image: "https://images.homedepot-static.com/productImages/9a56db62-c660-4460-b052-5601822e59e3/svn/gray-newtechwood-composite-siding-us09-16-lg-s-64_1000.jpg",
                  price: 3.00,
                  dimensions: {
                    area: 3.33, //ft.
                    length: 12, //ft.
                    thickness: 0.5, //in.
                    width: 6 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 301837334,
                  selected: false,
                  model: "PC4004H",
                  brand: "Ply Gem",
                  name: "Transformations Double 4 in. x 150 in. White Vinyl Lap Siding",
                  image: "https://images.homedepot-static.com/productImages/89f2ead0-37fb-4608-9bfb-3354bbe7b782/svn/white-ply-gem-vinyl-siding-pc4004h-64_1000.jpg",
                  price: 170.00,
                  dimensions: {
                    area: 10.64, //ft.
                    length: 150, //ft.
                    thickness: 0.040, //in.
                    width: 9.23 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 25,
              products: [
                {
                  item_id: 100055901,
                  selected: false,
                  model: "27874",
                  brand: "LP SmartSide",
                  name: "SmartSide 48 in. x 96 in. Strand Panel Siding",
                  image: "https://images.homedepot-static.com/productImages/c4332a11-65f7-4223-a3c9-9596b8ec44f3/svn/primed-lp-smartside-composite-siding-27874-64_1000.jpg",
                  price: 34.74,
                  dimensions: {
                    area: 32, //ft.
                    length: 96, //ft.
                    thickness: 0.315, //in.
                    width: 48.56 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Brown",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            },
          ],
        },
        windows: {
          window: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300702260,
                  selected: false,
                  model: "THDJW177200528",
                  brand: "JELD-WEN",
                  name: "37.375 in. x 60 in. W-2500 Series White Painted Clad Wood Double Hung Window w/ Natural Interior and Screen",
                  image: "https://images.homedepot-static.com/productImages/799fb844-3293-41a2-8d16-1ac07b45695e/svn/jeld-wen-double-hung-windows-thdjw177200528-64_1000.jpg",
                  price: 476.35,
                  dimensions: {
                    width: 37.375,
                    height: 60
                  },
                  weight: 58.42, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 7203157489,
                  selected: false,
                  model: "70 SLIDER BUCK",
                  brand: "American Craftsman",
                  name: "36 in. x 24 in. 70 Series Universal/Reversible Sliding White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/b7db059d-3900-419d-8432-a24d5d0fd735/svn/american-craftsman-sliding-windows-70-slider-buck-64_1000.jpg",
                  price: 88.96,
                  dimensions: {
                    width: 36,
                    height: 24
                  },
                  weight: 24, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 204814543,
                  selected: false,
                  model: "2438786",
                  brand: "American Craftsman",
                  name: "23.75 in. x 40 in. 70 Series Pro Double Hung White Vinyl Window",
                  image: "https://images.homedepot-static.com/productImages/a5868b23-b76a-4a81-adc0-e7ccdfeeb065/svn/american-craftsman-double-hung-windows-2438786-64_1000.jpg",
                  price: 129.00,
                  dimensions: {
                    width: 23.75,
                    height: 40
                  },
                  weight: 25, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          frame: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 204814577,
                  selected: false,
                  model: "2846786",
                  brand: "American Craftsman",
                  name: "27.75 in. x 45.25 in. 70 Series Pro Double Hung White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/26477954-fce2-4d40-8197-bfa073d9319c/svn/american-craftsman-double-hung-windows-2846786-64_1000.jpg",
                  price: 147.00,
                  dimensions: {
                    width: 27.75, //ft.
                    height: 45.25,
                  },
                  weight: 30, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          framekit: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 206613149,
                  selected: false,
                  model: "BSKIT51660",
                  brand: "Screen Tight",
                  name: "5/16 in. x 60 in. Brown Window Screen Frame Kit",
                  image: "https://images.homedepot-static.com/productImages/87897639-da0e-49ed-a0c7-c78f02e62a2e/svn/brown-screen-tight-window-screens-bskit51660-64_1000.jpg",
                  price: 13.28,
                  dimensions: {
                    width: .3125, //ft.
                    length: 60, //ft.
                  },
                  weight: 2, //lbs 
                  color: "Bronze",
                  quantity: 1,
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: "Chayce Heiberg Residence",
      validUsers: ["cheiberg"],
      customer_notes: null,
      location_line_1: "3019 NW Ogden Street",
      location_line_2: null,
      location_city: "Camas",
      location_region: "WA",
      location_postal_code: "98607",
      location_country: null,
      id: 613,
      property_type: "single_family_residential",
      updated_at: "2018-08-17T14:59:12.428Z",
      completed_at: "2018-08-17T14:59:12.428Z",
      created_at: "2018-08-17T14:59:12.428Z",
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3118,
            total: 2,
            length: 0
          },
          ridges_hips: {
            area: 0,
            total: 1,
            length: 60
          },
          valleys: {
            area: 0,
            total: 0,
            length: 0
          },
          rakes: {
            area: 0,
            total: 4,
            length: 103.92
          },
          gutters_eaves: {
            area: 0,
            total: 2,
            length: 120
          },
          flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          pitch: [
            {
              roof_pitch: "4/12",
              area: 3118,
              percentage: 100
            }
          ]
        }
      },
      products: {
        roofing: {
          shingles: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 205655916,
                  selected: false,
                  model: "786353",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 33, //ft.
                    length: 33, //ft.
                    thickness: 7.4, //in.
                    width: 7.5 //ft.
                  },
                  weight: 13.5, //lbs
                  color: "Black",
                  quantity: 3,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 205655965,
                  selected: false,
                  model: "TD01",
                  brand: "Owens Corning",
                  name: "TruDefinition Duration Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/36828037-7dec-4892-9d91-3f4419afce00/svn/onyx-black-owens-corning-roof-shingles-td01-64_1000.jpg",
                  price: 29.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 72, //lbs
                  color: "Black",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 15,
              products: [
                {
                  item_id: 205658438,
                  selected: false,
                  model: "HL20",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Estate Gray Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/929752d0-bd75-4870-b1e4-15e9ac3719ef/svn/estate-gray-owens-corning-roof-shingles-hl20-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 74, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            }
          ],
          underlayment: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 205035868,
                  selected: false,
                  model: "0973",
                  brand: "GAF",
                  name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 79.00,
                  dimensions: {
                    area: 1000, //ft.
                    length: 250, //ft.
                    thickness: 6.0, //in.
                    width: 48 //ft.
                  },
                  weight: 23, //lbs
                  color: "grey",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            }

          ],
          ridgeCaps: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300573201,
                  selected: false,
                  model: "5259",
                  brand: "Ondura",
                  name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
                  image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
                  price: 8.00,
                  dimensions: {
                    area: 3.4,
                    length: 39.5,
                    thickness: 0.125,
                    width: 12.5,
                  },
                  weight: 2.05, //lbs 
                  color: "Tan",
                  quantity: 5,
                }
              ]
            }
          ],
          dripEdge: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 202093168,
                  selected: false,
                  model: "RE15WH",
                  brand: "Construction Metals",
                  name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
                  image: "https://www.homedepot.com/p/Construction-Metals-1-1-2-in-x-1-1-2-in-x-10-ft-Galvanized-Steel-Drip-Edge-Flashing-in-White-RE15WH/202093168",
                  price: 4.70,
                  dimensions: {
                    area: 1.5,
                    length: 120,
                    thickness: 0.015625,
                    width: 1.5,
                  },
                  weight: 1.6, //lbs 
                  color: "White",
                  quantity: 2,
                }
              ]
            }
          ]
        },
        siding: {
          siding: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 305218602,
                  selected: false,
                  model: "US09-16-LG-S",
                  brand: "NewTechWood",
                  name: "All Weather System 0.5 in. x 5.5 in. x 1 ft. Westminster Gray Composite Siding Sample Board",
                  image: "https://images.homedepot-static.com/productImages/9a56db62-c660-4460-b052-5601822e59e3/svn/gray-newtechwood-composite-siding-us09-16-lg-s-64_1000.jpg",
                  price: 3.00,
                  dimensions: {
                    area: 3.33, //ft.
                    length: 12, //ft.
                    thickness: 0.5, //in.
                    width: 6 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 301837334,
                  selected: false,
                  model: "PC4004H",
                  brand: "Ply Gem",
                  name: "Transformations Double 4 in. x 150 in. White Vinyl Lap Siding",
                  image: "https://images.homedepot-static.com/productImages/89f2ead0-37fb-4608-9bfb-3354bbe7b782/svn/white-ply-gem-vinyl-siding-pc4004h-64_1000.jpg",
                  price: 170.00,
                  dimensions: {
                    area: 10.64, //ft.
                    length: 150, //ft.
                    thickness: 0.040, //in.
                    width: 9.23 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 25,
              products: [
                {
                  item_id: 100055901,
                  selected: false,
                  model: "27874",
                  brand: "LP SmartSide",
                  name: "SmartSide 48 in. x 96 in. Strand Panel Siding",
                  image: "https://images.homedepot-static.com/productImages/c4332a11-65f7-4223-a3c9-9596b8ec44f3/svn/primed-lp-smartside-composite-siding-27874-64_1000.jpg",
                  price: 34.74,
                  dimensions: {
                    area: 32, //ft.
                    length: 96, //ft.
                    thickness: 0.315, //in.
                    width: 48.56 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Brown",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            },
          ],
        },
        windows: {
          window: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300702260,
                  selected: false,
                  model: "THDJW177200528",
                  brand: "JELD-WEN",
                  name: "37.375 in. x 60 in. W-2500 Series White Painted Clad Wood Double Hung Window w/ Natural Interior and Screen",
                  image: "https://images.homedepot-static.com/productImages/799fb844-3293-41a2-8d16-1ac07b45695e/svn/jeld-wen-double-hung-windows-thdjw177200528-64_1000.jpg",
                  price: 476.35,
                  dimensions: {
                    width: 37.375,
                    height: 60
                  },
                  weight: 58.42, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 7203157489,
                  selected: false,
                  model: "70 SLIDER BUCK",
                  brand: "American Craftsman",
                  name: "36 in. x 24 in. 70 Series Universal/Reversible Sliding White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/b7db059d-3900-419d-8432-a24d5d0fd735/svn/american-craftsman-sliding-windows-70-slider-buck-64_1000.jpg",
                  price: 88.96,
                  dimensions: {
                    width: 36,
                    height: 24
                  },
                  weight: 24, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 204814543,
                  selected: false,
                  model: "2438786",
                  brand: "American Craftsman",
                  name: "23.75 in. x 40 in. 70 Series Pro Double Hung White Vinyl Window",
                  image: "https://images.homedepot-static.com/productImages/a5868b23-b76a-4a81-adc0-e7ccdfeeb065/svn/american-craftsman-double-hung-windows-2438786-64_1000.jpg",
                  price: 129.00,
                  dimensions: {
                    width: 23.75,
                    height: 40
                  },
                  weight: 25, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          frame: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 204814577,
                  selected: false,
                  model: "2846786",
                  brand: "American Craftsman",
                  name: "27.75 in. x 45.25 in. 70 Series Pro Double Hung White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/26477954-fce2-4d40-8197-bfa073d9319c/svn/american-craftsman-double-hung-windows-2846786-64_1000.jpg",
                  price: 147.00,
                  dimensions: {
                    width: 27.75, //ft.
                    height: 45.25,
                  },
                  weight: 30, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          framekit: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 206613149,
                  selected: false,
                  model: "BSKIT51660",
                  brand: "Screen Tight",
                  name: "5/16 in. x 60 in. Brown Window Screen Frame Kit",
                  image: "https://images.homedepot-static.com/productImages/87897639-da0e-49ed-a0c7-c78f02e62a2e/svn/brown-screen-tight-window-screens-bskit51660-64_1000.jpg",
                  price: 13.28,
                  dimensions: {
                    width: .3125, //ft.
                    length: 60, //ft.
                  },
                  weight: 2, //lbs 
                  color: "Bronze",
                  quantity: 1,
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: "Loren Horowitz Residence",
      validUsers: ["lhorowitz"],
      customer_notes: null,
      location_line_1: "18807 NE 27th Way",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98684",
      location_country: null,
      id: 614,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:59:12.428Z",
      completed_at: "2018-08-17T14:59:12.428Z",
      created_at: "2018-08-17T14:59:12.428Z",
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      measurements: {
        roof: {
          roof_facets: {
            area: 3118,
            total: 2,
            length: 0
          },
          ridges_hips: {
            area: 0,
            total: 1,
            length: 60
          },
          valleys: {
            area: 0,
            total: 0,
            length: 0
          },
          rakes: {
            area: 0,
            total: 4,
            length: 103.92
          },
          gutters_eaves: {
            area: 0,
            total: 2,
            length: 120
          },
          flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          step_flashing: {
            area: 0,
            total: 0,
            length: 0
          },
          pitch: [
            {
              roof_pitch: "4/12",
              area: 3118,
              percentage: 100
            }
          ]
        }
      },
      products: {
        roofing: {
          shingles: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 205655916,
                  selected: false,
                  model: "786353",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 33, //ft.
                    length: 33, //ft.
                    thickness: 7.4, //in.
                    width: 7.5 //ft.
                  },
                  weight: 13.5, //lbs
                  color: "Black",
                  quantity: 3,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 205655965,
                  selected: false,
                  model: "TD01",
                  brand: "Owens Corning",
                  name: "TruDefinition Duration Algae Resistant Onyx Black Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/36828037-7dec-4892-9d91-3f4419afce00/svn/onyx-black-owens-corning-roof-shingles-td01-64_1000.jpg",
                  price: 29.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 72, //lbs
                  color: "Black",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 15,
              products: [
                {
                  item_id: 205658438,
                  selected: false,
                  model: "HL20",
                  brand: "Owens Corning",
                  name: "Oakridge Algae Resistant Estate Gray Laminate Architectural Shingles (32.8 sq. ft. per Bundle)",
                  image: "https://images.homedepot-static.com/productImages/929752d0-bd75-4870-b1e4-15e9ac3719ef/svn/estate-gray-owens-corning-roof-shingles-hl20-64_1000.jpg",
                  price: 27.00,
                  dimensions: {
                    area: 32.8, //ft.
                    length: 39.375, //ft.
                    thickness: 0.146, //in.
                    width: 13.25 //ft.
                  },
                  weight: 74, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            }
          ],
          underlayment: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 205035868,
                  selected: false,
                  model: "0973",
                  brand: "GAF",
                  name: "1000 sq. ft. FeltBuster Synthetic Roofing Underlayment Roll",
                  image: "https://images.homedepot-static.com/productImages/271746c1-8a65-4cd8-86d7-bdd4e80e9f5e/svn/onyx-black-owens-corning-roof-shingles-786353-64_1000.jpg",
                  price: 79.00,
                  dimensions: {
                    area: 1000, //ft.
                    length: 250, //ft.
                    thickness: 6.0, //in.
                    width: 48 //ft.
                  },
                  weight: 23, //lbs
                  color: "grey",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            }

          ],
          ridgeCaps: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300573201,
                  selected: false,
                  model: "5259",
                  brand: "Ondura",
                  name: "3.3 ft. x 12-1/2 in. Tan Ridge Cap Asphalt Roof Panel",
                  image: "https://images.homedepot-static.com/productImages/3f8f96e8-e02b-47fe-9f7b-ffcbaa141340/svn/tan-ondura-asphalt-panels-5259-64_1000.jpg",
                  price: 8.00,
                  dimensions: {
                    area: 3.4,
                    length: 39.5,
                    thickness: 0.125,
                    width: 12.5,
                  },
                  weight: 2.05, //lbs 
                  color: "Tan",
                  quantity: 5,
                }
              ]
            }
          ],
          dripEdge: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 202093168,
                  selected: false,
                  model: "RE15WH",
                  brand: "Construction Metals",
                  name: "1-1/2 in. x 1-1/2 in. x 10 ft. Galvanized Steel Drip Edge Flashing in White",
                  image: "https://www.homedepot.com/p/Construction-Metals-1-1-2-in-x-1-1-2-in-x-10-ft-Galvanized-Steel-Drip-Edge-Flashing-in-White-RE15WH/202093168",
                  price: 4.70,
                  dimensions: {
                    area: 1.5,
                    length: 120,
                    thickness: 0.015625,
                    width: 1.5,
                  },
                  weight: 1.6, //lbs 
                  color: "White",
                  quantity: 2,
                }
              ]
            }
          ]
        },
        siding: {
          siding: [
            {
              quantity: 10,
              products: [
                {
                  item_id: 305218602,
                  selected: false,
                  model: "US09-16-LG-S",
                  brand: "NewTechWood",
                  name: "All Weather System 0.5 in. x 5.5 in. x 1 ft. Westminster Gray Composite Siding Sample Board",
                  image: "https://images.homedepot-static.com/productImages/9a56db62-c660-4460-b052-5601822e59e3/svn/gray-newtechwood-composite-siding-us09-16-lg-s-64_1000.jpg",
                  price: 3.00,
                  dimensions: {
                    area: 3.33, //ft.
                    length: 12, //ft.
                    thickness: 0.5, //in.
                    width: 6 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 20,
              products: [
                {
                  item_id: 301837334,
                  selected: false,
                  model: "PC4004H",
                  brand: "Ply Gem",
                  name: "Transformations Double 4 in. x 150 in. White Vinyl Lap Siding",
                  image: "https://images.homedepot-static.com/productImages/89f2ead0-37fb-4608-9bfb-3354bbe7b782/svn/white-ply-gem-vinyl-siding-pc4004h-64_1000.jpg",
                  price: 170.00,
                  dimensions: {
                    area: 10.64, //ft.
                    length: 150, //ft.
                    thickness: 0.040, //in.
                    width: 9.23 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Grey",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 25,
              products: [
                {
                  item_id: 100055901,
                  selected: false,
                  model: "27874",
                  brand: "LP SmartSide",
                  name: "SmartSide 48 in. x 96 in. Strand Panel Siding",
                  image: "https://images.homedepot-static.com/productImages/c4332a11-65f7-4223-a3c9-9596b8ec44f3/svn/primed-lp-smartside-composite-siding-27874-64_1000.jpg",
                  price: 34.74,
                  dimensions: {
                    area: 32, //ft.
                    length: 96, //ft.
                    thickness: 0.315, //in.
                    width: 48.56 //ft.
                  },
                  weight: 5.0, //lbs
                  color: "Brown",
                  quantity: 1,
                }
              ]
            }
          ],
          nails: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 308506676,
                  selected: false,
                  model: "S510ARN5",
                  brand: "Simpson Strong-Tie",
                  name: "5d 1-3/4 in. Roofing Nail Annular Ring Shank (5 lbs.-Pack)",
                  image: "https://images.homedepot-static.com/productImages/8a78fe14-a4bc-4258-82d8-3a0fefd706da/svn/simpson-strong-tie-framing-nails-s510arn5-64_1000.jpg",
                  price: 53.76,
                  dimensions: {
                    headwidth: 0.375, //ft.
                    length: 1.75, //ft.
                  },
                  weight: 5, //lbs 
                  color: "Stainless Steel",
                  quantity: 4,
                }
              ]
            },
          ],
        },
        windows: {
          window: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 300702260,
                  selected: false,
                  model: "THDJW177200528",
                  brand: "JELD-WEN",
                  name: "37.375 in. x 60 in. W-2500 Series White Painted Clad Wood Double Hung Window w/ Natural Interior and Screen",
                  image: "https://images.homedepot-static.com/productImages/799fb844-3293-41a2-8d16-1ac07b45695e/svn/jeld-wen-double-hung-windows-thdjw177200528-64_1000.jpg",
                  price: 476.35,
                  dimensions: {
                    width: 37.375,
                    height: 60
                  },
                  weight: 58.42, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 7203157489,
                  selected: false,
                  model: "70 SLIDER BUCK",
                  brand: "American Craftsman",
                  name: "36 in. x 24 in. 70 Series Universal/Reversible Sliding White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/b7db059d-3900-419d-8432-a24d5d0fd735/svn/american-craftsman-sliding-windows-70-slider-buck-64_1000.jpg",
                  price: 88.96,
                  dimensions: {
                    width: 36,
                    height: 24
                  },
                  weight: 24, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            },
            {
              quantity: 2,
              products: [
                {
                  item_id: 204814543,
                  selected: false,
                  model: "2438786",
                  brand: "American Craftsman",
                  name: "23.75 in. x 40 in. 70 Series Pro Double Hung White Vinyl Window",
                  image: "https://images.homedepot-static.com/productImages/a5868b23-b76a-4a81-adc0-e7ccdfeeb065/svn/american-craftsman-double-hung-windows-2438786-64_1000.jpg",
                  price: 129.00,
                  dimensions: {
                    width: 23.75,
                    height: 40
                  },
                  weight: 25, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          frame: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 204814577,
                  selected: false,
                  model: "2846786",
                  brand: "American Craftsman",
                  name: "27.75 in. x 45.25 in. 70 Series Pro Double Hung White Vinyl Window with Buck Frame",
                  image: "https://images.homedepot-static.com/productImages/26477954-fce2-4d40-8197-bfa073d9319c/svn/american-craftsman-double-hung-windows-2846786-64_1000.jpg",
                  price: 147.00,
                  dimensions: {
                    width: 27.75, //ft.
                    height: 45.25,
                  },
                  weight: 30, //lbs 
                  color: "White",
                  quantity: 1,
                }
              ]
            }
          ],
          framekit: [
            {
              quantity: 5,
              products: [
                {
                  item_id: 206613149,
                  selected: false,
                  model: "BSKIT51660",
                  brand: "Screen Tight",
                  name: "5/16 in. x 60 in. Brown Window Screen Frame Kit",
                  image: "https://images.homedepot-static.com/productImages/87897639-da0e-49ed-a0c7-c78f02e62a2e/svn/brown-screen-tight-window-screens-bskit51660-64_1000.jpg",
                  price: 13.28,
                  dimensions: {
                    width: .3125, //ft.
                    length: 60, //ft.
                  },
                  weight: 2, //lbs 
                  color: "Bronze",
                  quantity: 1,
                }
              ]
            }
          ]
        }
      }
    }
  ],
  meta: {
    request_received_at: 1529346004
  }
};
