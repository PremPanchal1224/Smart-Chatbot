export async function query(data) {
	try {
	   const response = await fetch(
		  "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
		  {
			 headers: {
				Authorization: "Your_HuggingFace_API_Key", // Replace with your actual API key
				"Content-Type": "application/json",
			 },
			 method: "POST",
			 body: JSON.stringify({ "inputs": data.prompt }),
		  }
	   );
 
	   if (!response.ok) {
		  throw new Error(`HTTP error! Status: ${response.status}`);
	   }
 
	   const result = await response.blob();
	   return result;
	} catch (error) {
	   console.error("Error fetching image:", error);
	   throw error;
	}
 }
 