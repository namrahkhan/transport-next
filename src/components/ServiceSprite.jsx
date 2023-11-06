import Card from "./core/Card";
import Image from "./core/Image";
import Link from "./core/Link";

const ServiceSprite = ({ children }) => {
  return (
    <Card className="text-center border-none" alignCenter>
      <div
        className="d-block rounded rounded-circle overflow-hidden position-relative mb-3 shadow"
        style={{ width: "100px", height: "100px" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1682685797140-c17807f8f217?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={100}
          width={100}
          style={{ top: 0, left: 0 }}
          className="position-absolute"
        />
      </div>
      <h3>Service</h3>
      <p>Some content ofcourse</p>
      <Link path="/" className="btn btn-sm btn-primary d-block w-50">
        Link to somewhere
      </Link>
    </Card>
  );
};

export default ServiceSprite;
