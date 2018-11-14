// THESE ARE MOCK RETURNS FROM HOVER API CALLS:

// LIST JOBS RETURN:
// https://sandbox.hover.to/api/v2/jobs

export const mockJobsList = {
  pagination: {
    current_page: 1,
    total_pages: 1,
    total: 2
  },
  results: [
    {
      archived: false,
      name: "Josh Feener Residence",
      customer_notes: null,
      deliverable_id: 3,
      location_line_1: "1119 W 32nd Street",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98660",
      location_country: null,
      location_lat: null,
      location_lon: null,
      id: 610,
      client_identifier: null,
      roof_estimate_access_level: "none",
      estimated_hours_to_completion: 0,
      approved: true,
      example: false,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:48:12.428Z",
      completed_at: null,
      approved_at: null,
      created_at: "2018-08-17T14:48:12.428Z",
      org_id: 124,
      user_id: 51,
      search_rank: null,
      has_money_shot: false,
      state: "uploading",
      via_job_share: null,
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      via_org_job_accesses: [
        {
          id: 645,
          org_id: 124,
          lead_state: "assigned",
          kind: "creator",
          ordering_state: "lead"
        }
      ],
      via_job_assignments: [
        {
          id: 685,
          kind: "creator"
        }
      ]
    },
    {
      archived: false,
      name: "Max Ellis Residence",
      customer_notes: null,
      deliverable_id: 3,
      location_line_1: "3401 NW 9th Avenue",
      location_line_2: null,
      location_city: "Camas",
      location_region: "WA",
      location_postal_code: "98607",
      location_country: null,
      location_lat: null,
      location_lon: null,
      id: 611,
      client_identifier: null,
      roof_estimate_access_level: "none",
      estimated_hours_to_completion: 0,
      approved: true,
      example: false,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:51:12.428Z",
      completed_at: "2018-08-17T14:51:12.428Z",
      approved_at: null,
      created_at: "2018-08-17T14:51:12.428Z",
      org_id: 124,
      user_id: 51,
      search_rank: null,
      has_money_shot: true,
      state: "complete",
      via_job_share: null,
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      via_org_job_accesses: [
        {
          id: 644,
          org_id: 124,
          lead_state: "assigned",
          kind: "creator",
          ordering_state: "lead"
        }
      ],
      via_job_assignments: [
        {
          id: 684,
          kind: "creator"
        }
      ]
    },
    {
      archived: false,
      name: "Arnold Castro Residence",
      customer_notes: null,
      deliverable_id: 3,
      location_line_1: "13010 NE 46th Street",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98682",
      location_country: null,
      location_lat: null,
      location_lon: null,
      id: 612,
      client_identifier: null,
      roof_estimate_access_level: "none",
      estimated_hours_to_completion: 0,
      approved: true,
      example: false,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:56:12.428Z",
      completed_at: "2018-08-17T14:56:12.428Z",
      approved_at: null,
      created_at: "2018-08-17T14:56:12.428Z",
      org_id: 124,
      user_id: 51,
      search_rank: null,
      has_money_shot: true,
      state: "complete",
      via_job_share: null,
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      via_org_job_accesses: [
        {
          id: 644,
          org_id: 124,
          lead_state: "assigned",
          kind: "creator",
          ordering_state: "lead"
        }
      ],
      via_job_assignments: [
        {
          id: 684,
          kind: "creator"
        }
      ]
    },
    {
      archived: false,
      name: "Chayce Heiberg Residence",
      customer_notes: null,
      deliverable_id: 3,
      location_line_1: "3019 NW Ogden Street",
      location_line_2: null,
      location_city: "Camas",
      location_region: "WA",
      location_postal_code: "98607",
      location_country: null,
      location_lat: null,
      location_lon: null,
      id: 613,
      client_identifier: null,
      roof_estimate_access_level: "none",
      estimated_hours_to_completion: 0,
      approved: true,
      example: false,
      property_type: "single_family_residential",
      updated_at: "2018-08-17T14:59:12.428Z",
      completed_at: "2018-08-17T14:59:12.428Z",
      approved_at: null,
      created_at: "2018-08-17T14:59:12.428Z",
      org_id: 124,
      user_id: 51,
      search_rank: null,
      has_money_shot: true,
      state: "complete",
      via_job_share: null,
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      via_org_job_accesses: [
        {
          id: 644,
          org_id: 124,
          lead_state: "assigned",
          kind: "creator",
          ordering_state: "lead"
        }
      ],
      via_job_assignments: [
        {
          id: 684,
          kind: "creator"
        }
      ]
    },
    {
      archived: false,
      name: "Loren Horowitz Residence",
      customer_notes: null,
      deliverable_id: 3,
      location_line_1: "18807 NE 27th Way",
      location_line_2: null,
      location_city: "Vancouver",
      location_region: "WA",
      location_postal_code: "98684",
      location_country: null,
      location_lat: null,
      location_lon: null,
      id: 614,
      client_identifier: null,
      roof_estimate_access_level: "none",
      estimated_hours_to_completion: 0,
      approved: true,
      example: false,
      property_type: "single_family_residential",
      updated_at: "2018-11-13T14:59:12.428Z",
      completed_at: "2018-08-17T14:59:12.428Z",
      approved_at: null,
      created_at: "2018-08-17T14:59:12.428Z",
      org_id: 124,
      user_id: 51,
      search_rank: null,
      has_money_shot: true,
      state: "complete",
      via_job_share: null,
      job_status: "active",
      active_projects: {
        roofing: true,
        siding: false,
        windows: false
      },
      via_org_job_accesses: [
        {
          id: 644,
          org_id: 124,
          lead_state: "assigned",
          kind: "creator",
          ordering_state: "lead"
        }
      ],
      via_job_assignments: [
        {
          id: 684,
          kind: "creator"
        }
      ]
    }
  ],
  meta: {
    request_received_at: 1529346004
  }
};
