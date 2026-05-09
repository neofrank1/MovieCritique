import { Card } from "../../components/Card";
import { Link } from "react-router";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="bg-base-100 shadow-lg p-10 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </Card>
    </div>
  );
}