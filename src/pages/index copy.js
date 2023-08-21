import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
// import { useCountries } from "use-react-countries";
import {
  Button,
  Typography,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { countries } = useCountries();
  // const [country, setCountry] = React.useState(0);
  // const { name, flags, countryCallingCode } = countries[country];

  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <main>
      <Card
        className="w-full"
        style={{
          padding: "5rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "800px",
          margin: "auto",
          background: "#fff",
        }}
      >
        <div>
        <Typography variant="h4" color="blue-gray">
          Let's Get Started
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to proceed.
        </Typography>
        </div>
       
        <div className="flex gap-4 w-full">
          <div className="w-full">
            <Input className="w-full" type="text" label="First Name" />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Enter your first name
            </Typography>
          </div>
          <div className="w-full">
            <Input type="text" label="First Name" />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Enter your first name
            </Typography>
          </div>
        </div>
        {/* <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu> */}
        <Input
          type="tel"
          placeholder="Mobile Number"
          className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0",
          }}
        />
        <div className="relative flex w-full">
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={email ? "gray" : "blue-gray"}
            disabled={!email}
            className="!absolute right-1 top-1 rounded"
          >
            Invite
          </Button>
        </div>

        <List className="flex-row">
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="horizontal-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                India
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-vue"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="horizontal-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                USA
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-svelte"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="horizontal-list-svelte"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Sweden
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="horizontal-list-svelte"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="horizontal-list-svelte"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
               Australia
              </Typography>
            </label>
          </ListItem>
        </List>
        <div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
        </div>
      </Card>
    </main>
  );
}
