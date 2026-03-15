export const metadata = {
  title: "Interview Dashboard",
  description: "Candidate Interview Scoring"
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          background: "#f6f7fb",
          margin: 0
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            padding: "30px"
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
