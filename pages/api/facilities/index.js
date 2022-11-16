import getAllFacilities from "../../../helpers/db";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allFacilities = await getAllFacilities();
    response.status(200).json(allFacilities);
  } else {
    response.status(405).setHeader("Allow", ["GET"]).send();
  }
}
