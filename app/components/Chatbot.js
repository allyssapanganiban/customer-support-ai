import Navbar from './Navbar'
import { Box, Stack, TextField, CircularProgress, IconButton, Typography } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi there! I'm your AI assistant here at University of Funsies. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const [convHistory, setConvHistory] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);

    const userMessage = { role: "user", content: message };
    setMessage("");
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      { role: "assistant", content: "..." },
    ]);

    setConvHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", content: message },
    ]);

    try {
      const response = await fetch("/api/main", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: message,
          conv_history: convHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setConvHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: data.answer },
      ]);

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: "assistant", content: data.answer },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        {
          role: "assistant",
          content:
            "I'm sorry, but I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingX= "10px"
    >
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        maxWidth="520px"
        width="100%"
        textAlign="center"
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", marginTop: 3, marginBottom: 1, fontFamily: "Poppins", lineHeight: "40px" }}>
          Hi, [Full Name]!
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 0.5, fontFamily: "Poppins", color: "#444444" }}>
          Can I help you with anything?
        </Typography>
        <Typography sx={{  marginBottom: 1, fontFamily: "Poppins", fontSize: "13px", color: "#444444"}}>
          Ready to assist you with anything you need in your academic journey. Let's get started!
        </Typography>
      </Box>
      <Stack
        direction={"column"}
        width="100%"
        maxWidth="600px"
        height="100%"
        maxHeight="400px"
        borderRadius={2}
        // boxShadow={3}
        // bgcolor="white"
        bgcolor="rgba(255, 255, 255, 0.5)"
        p={2}
        spacing={3}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
          fontSize={14}
          paddingX={1}
          sx={{
            overflowX: 'hidden', // Prevent horizontal scrolling
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1', 
              borderRadius: '10px', 
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888', 
              borderRadius: '10px', 
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#555', 
            },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === "assistant" ? "flex-start" : "flex-end"
              }
            >
              <Box
                bgcolor={
                  message.role === "assistant"
                    ? "#C1EDF3"
                    : "white"
                }
                color="black"
                borderRadius={5}
                boxShadow={5}
                p={2}
                maxWidth="80%"
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
        <Stack
          direction={"row"} 
          spacing={2} 
          alignItems="center"
          borderRadius={10}
          boxShadow={3}
          sx={{
            maxWidth: "600px",
            width: "100%",
            maxHeight: "50px",
            bgcolor: "white",
          }}
        >
          <TextField
            placeholder="Ask Education Bot anything.."
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                bgcolor: "white",
                fontFamily: 'Poppins',
                fontSize: "14px",
                boxShadow: "none",
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": {
                padding: "13px 20px",
              },
            }}
          />
          <IconButton
            onClick={sendMessage}
            disabled={isLoading || !message.trim()}
            sx={{
              bgcolor: "#63C2CF",
              borderRadius: "50%",
              width: "45px",
              height: "45px",
              color: "black",
              // marginLeft: "-20px",
              "&:hover": {
                bgcolor: "#4DA9B6",
            },
            }}
          >
          {isLoading ? <CircularProgress size={24} /> : <ArrowUpward />}
        </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}