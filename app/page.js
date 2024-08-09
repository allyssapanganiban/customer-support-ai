"use client";

import { Box, Button, Stack, TextField, CircularProgress, IconButton } from "@mui/material";
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
      bgcolor="#f0f0f0"
    >
      <Stack
        direction={"column"}
        width="100%"
        maxWidth="500px"
        height="100%"
        maxHeight="700px"
        borderRadius={2}
        boxShadow={3}
        bgcolor="white"
        p={2}
        spacing={3}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"
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
                    ? "primary.main"
                    : "secondary.main"
                }
                color="white"
                borderRadius={2}
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
            maxWidth: "500px",
            width: "100%",
            maxHeight: "60px",
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
                fontSize: "17px",
                boxShadow: "none",
                "& fieldset": {
                  border: "none",
                },
              },
              "& .MuiInputBase-input": {
                padding: "15px 20px",
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
              marginLeft: "10px",
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