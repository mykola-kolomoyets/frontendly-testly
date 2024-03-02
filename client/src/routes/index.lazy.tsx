import { createLazyFileRoute } from "@tanstack/react-router";
import Typography from "@/components/Typography";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Typography variant="heading-1" asChild>
        <h1>Taxing Laughter: The Joke Tax Chronicles</h1>
      </Typography>
      <Typography variant="heading-2" asChild>
        <h2>The People of the Kingdom</h2>
      </Typography>
      <Typography variant="heading-3" asChild>
        <h3>The Joke Tax</h3>
      </Typography>
      <Typography variant="heading-4" asChild>
        <h4>People stopped telling jokes</h4>
      </Typography>
      <Typography variant="paragraph" asChild>
        <p>
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </Typography>
      <Typography variant="table-header" asChild>
        <p>People’s happiness</p>
      </Typography>
      <Typography variant="table-cell" asChild>
        <p>Overflowing</p>
      </Typography>
      <ul>
        <li>
          <Typography variant="list-item" asChild>
            <span>1st level of puns: 5 gold coins</span>
          </Typography>
          <Typography variant="list-item" asChild>
            <span>2nd level of jokes: 10 gold coins</span>
          </Typography>
        </li>
      </ul>
      <Typography variant="lead" asChild>
        <p>
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </Typography>
      <Typography variant="large" asChild>
        <p>Are you sure absolutely sure?</p>
      </Typography>
      <Typography variant="small" asChild>
        <p>Email address</p>
      </Typography>
      <Typography variant="subtle" asChild>
        <p>Enter your email address.</p>
      </Typography>
    </div>
  );
}
