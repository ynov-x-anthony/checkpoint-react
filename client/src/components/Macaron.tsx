import "./Macaron.css";

interface MacaronProps {
  data: Macaron;
}

function Macaron({ data }: MacaronProps) {
  return (
    <div className="macaron-container">
      <div className="macaron">
        <div className={`accessory ${data.accessory}`} />
        <div className="shell shell-top" />
        <div className="filling">
          <div
            className="filling-color"
            style={{
              backgroundColor: data.color1,
            }}
          />
          <div
            className="filling-color"
            style={{
              backgroundColor: data.color2,
            }}
          />
          <div
            className="filling-color"
            style={{
              backgroundColor: data.color3,
            }}
          />
        </div>
        <div className="shell shell-bottom">
          <div className="face">
            <div className="eyes">
              <div className="left-eye" />
              <div className="right-eye" />
            </div>
            <div className="mouth" />
            <div className="cheeks">
              <div className="left-cheek" />
              <div className="right-cheek" />
            </div>
          </div>
        </div>
      </div>

      <div className="macaron-name">{data.name}</div>
    </div>
  );
}

export default Macaron;
