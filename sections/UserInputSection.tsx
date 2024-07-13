import { h } from "preact";
import { useState } from "preact/hooks";

interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Capy" }: Props) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const userInput = event.target.user_input.value;
    
    // Replace with your Gemini API URL and key
    const geminiApiUrl = "https://api.gemini.com/v1/your-endpoint";
    const apiKey = "AIzaSyAylTOnwF6L_mB-TaThMcIfrX-eBIfxLaQ";

    try {
      const res = await fetch(geminiApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ input: userInput }),
      });

      if (!res.ok) {
        throw new Error('Error in API request');
      }

      const jsonResponse = await res.json();
      setResponse(jsonResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Input to Gemini API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          User Input:
          <input type="text" name="user_input" required />
        </label>
        <button type="submit">Send</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
        <div>
          <h2>Response from Gemini API</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

// Test cases
import { render, fireEvent } from "preact-testing-library";

describe("Section", () => {
  it("renders with default props", () => {
    const { getByText } = render(<Section />);
    expect(getByText("Send Input to Gemini API")).toBeInTheDocument();
    expect(getByText("User Input:")).toBeInTheDocument();
    expect(getByText("Send")).toBeInTheDocument();
  });

  it("renders with custom name prop", () => {
    const { getByText } = render(<Section name="Custom Name" />);
    expect(getByText("Custom Name")).toBeInTheDocument();
  });

  it("shows loading state when submitting form", async () => {
    const { getByText, getByLabelText, queryByText } = render(<Section />);
    const input = getByLabelText("User Input:");
    const submitButton = getByText("Send");

    fireEvent.change(input, { target: { value: "test input" } });
    fireEvent.click(submitButton);

    expect(getByText("Loading...")).toBeInTheDocument();
    expect(queryByText("Error in API request")).toBeNull();
    expect(queryByText("Response from Gemini API")).toBeNull();
  });

  it("shows error state when API request fails", async () => {
    const { getByText, getByLabelText, queryByText } = render(<Section />);
    const input = getByLabelText("User Input:");
    const submitButton = getByText("Send");

    fireEvent.change(input, { target: { value: "test input" } });
    fireEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(getByText("Error in API request")).toBeIn();
    });