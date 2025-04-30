import { Frame, Stack, Text, Button } from "framer";

export default function App() {
  return (
    <Frame width="100%" height="100%" background="#0a0a0a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Stack
        gap={40}
        align="center"
        justify="center"
        height="100vh"
        padding={20}
      >
        <Text
          style={{ fontSize: 48, fontWeight: "bold", color: "white", textAlign: "center" }}
        >
          Pass Your Funded Challenge With Ease
        </Text>
        <Text
          style={{ fontSize: 20, color: "#CCCCCC", maxWidth: 600, textAlign: "center" }}
        >
          Unlock professional strategies, expert guidance, and step-by-step support to get funded faster than ever before.
        </Text>
        <Button
          style={{ fontSize: 18, padding: "14px 28px", backgroundColor: "#1e90ff", color: "white", borderRadius: 8 }}
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </Button>
      </Stack>
    </Frame>
  );
}
