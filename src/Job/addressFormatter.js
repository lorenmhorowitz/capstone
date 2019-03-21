export const addressFormatter = (
  location_city,
  location_region,
  location_postal_code
) => {
  let res = "";
  if (location_city !== null && location_city !== "") {
    res += location_city;
  }
  if (location_region !== null && location_region !== "") {
    if (res !== "") res += `, `;
    res += location_region;
  }
  if (location_postal_code !== null && location_postal_code !== "") {
    if (res !== "") res += " ";
    res += location_postal_code;
  }
  return res;
};
