export default function Header() {
  return (
    <header style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #ddd", backgroundColor: "white" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>MyBrand</div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#features">Возможности</a>
        <a href="#pricing">Тарифы</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
}
