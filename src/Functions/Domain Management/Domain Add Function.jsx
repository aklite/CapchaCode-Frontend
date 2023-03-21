// Description: This snippet is used to add domain in the dashboard section of the website. This snippet is used to add domain in the dashboard section of the website.

// import essential modules
import {POST_Request} from '../../Functions/HTTP Request Sender/POST Request Sender'; // import POSTRequestSender function
import { hostname } from "../../Variables/Non-Changable Variables"; // import hostname variable


export default async function DomainAddFunction(DomainData) {
    let DomainAddResponse = await POST_Request(`/live/post/domain//add-domain`, DomainData); // send POST request to add domain
    return DomainAddResponse.Status
} // export DomainAddFunction function