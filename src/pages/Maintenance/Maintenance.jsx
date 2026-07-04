function Maintenance() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#d4a017" }}>
        Website Under Maintenance
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px" }}>
        We are currently updating our website and making important legal
        improvements. Please check back soon.
      </p>

      <h3>SKEMRO</h3>
    </div>
  );
}

export default Maintenance;