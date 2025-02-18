import { AxiosError } from "axios";
import { toast } from "sonner";

export const handleError = (error: unknown): void => {
  if (error instanceof AxiosError) {
    if (error.response) {
      const responseData = error.response.data as { error?: string };
      toast.error(
        `Error: ${error.response.status} - ${
          responseData.error || "An error occurred"
        }`
      );
    } else if (error.request) {
      toast.error("Error: No response received from server");
    } else {
      toast.error(`Error: ${error.message}`);
    }
  } else if (error instanceof Error) {
    toast.error(`Error: ${error.message}`);
  } else {
    toast.error("Error: An unknown error occurred");
  }
};
