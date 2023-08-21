import Image from "next/image";
import { useState } from "react";
import { Inter } from "next/font/google";
// import { useCountries } from "use-react-countries";
import {
  Button,
  Typography,
  Input,
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Card,
  CardHeader,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
  Textarea,
  Tooltip,
  Rating,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Popover,
  PopoverHandler,
  PopoverContent,
  Switch,
  IconButton,
  MenuItem,
} from "@material-tailwind/react";
const inter = Inter({ subsets: ["latin"] });
import {
  CreditCardIcon,
  LockClosedIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const [type, setType] = useState("card");
  const [rated, setRated] = useState(4);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [payOpen, setPayOpen] = useState(false);
  const handlePayOpen = () => setPayOpen((cur) => !cur);

  const [showErrorr, setShowErrorr] = useState(false);
  const handleShowErrorr = () => setShowErrorr(!showErrorr);

  return (
    <main>
      <Card
        style={{
          width: "600px",
          margin: "auto",
          background: "#fff",
        }}
      >
        <CardHeader
          color="gray"
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-8 px-4 text-center"
        >
          <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
            <BanknotesIcon className="h-10 w-10" />
          </div>
          <Typography variant="h4" color="white">
            SureForms Version 0.0.2
          </Typography>
        </CardHeader>
        <CardBody style={{ background: "#f8fafc" }}>
          <Tabs value={type} className="overflow-visible">
            <TabsHeader className="relative z-0 ">
              <Tab value="card" onClick={() => setType("card")}>
                Personal Details
              </Tab>
              <Tab value="paypal" onClick={() => setType("paypal")}>
                Payment Details
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-visible"
              style={{ height: "68vh", overflow: "auto" }}
              animate={{
                initial: {
                  x: type === "card" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "card" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="card" className="p-0">
                <form className="mt-4 flex flex-col gap-4">
                  <div className="my-2 flex flex-col gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      User Details
                    </Typography>

                    <div className="flex gap-4 w-full">
                      <Input
                        className="w-full"
                        type="text"
                        label="First Name"
                      />
                      <Input
                        type="text"
                        label="First Name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Tooltip content="Click verify button to validate.">
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
                            Verify
                          </Button>
                        </div>
                      </Tooltip>
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
                        Email ID must include @bsf.io
                      </Typography>
                    </div>
                  </div>
                  <div className="my-2 flex flex-col gap-1">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Select Countries
                    </Typography>
                    <Card className="w-full">
                      <List className="flex-row">
                        <ListItem className="p-0">
                          <label
                            htmlFor="horizontal-list-react"
                            className="flex w-full cursor-pointer items-center px-3 py-2"
                          >
                            <ListItemPrefix className="mr-3">
                              <Checkbox
                                defaultChecked
                                id="horizontal-list-react"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                  className: "p-0",
                                }}
                              />
                            </ListItemPrefix>
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
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
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
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
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
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
                            <Typography
                              color="blue-gray"
                              className="font-medium"
                            >
                              Australia
                            </Typography>
                          </label>
                        </ListItem>
                      </List>
                    </Card>
                  </div>
                  <div className=" flex flex-col gap-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Rate Us
                    </Typography>

                    <div className="flex items-center gap-2">
                      <Rating value={4} onChange={(value) => setRated(value)} />
                      <Typography color="blue-gray" className="font-medium">
                        {rated}.0 Rated
                      </Typography>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Have more details to share?
                    </Typography>

                    <Textarea variant="outlined" label="Message" />
                  </div>
                  <div style={{ padding: "0 15px" }}>
                    <Switch
                      label={
                        <div>
                          <Typography color="blue-gray" className="font-medium">
                            Remember Me
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            You&apos;ll be able to login without password for 24
                            hours.
                          </Typography>
                        </div>
                      }
                    />
                  </div>

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
                  />

                  <div>
                    <Tooltip content="Check all details before submitting.">
                      <Button onClick={handleOpen} className="" fullWidth>
                        Submit Now
                      </Button>
                    </Tooltip>

                    <Typography
                      color="gray"
                      className="mt-4 text-center font-normal"
                    >
                      Already have an account?{" "}
                      <a href="#" className="font-medium text-gray-900">
                        Sign In
                      </a>
                    </Typography>
                    <div className="mt-4 flex flex-col items-center gap-4">
                      <Popover
                        placement="right"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <Button
                            size="lg"
                            color="white"
                            className="flex items-center gap-3"
                          >
                            <img
                              src="https://www.material-tailwind.com/icons/metamask.svg"
                              alt="metamask"
                              className="h-6 w-6"
                            />
                            Connect Wallet
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          You are logging in with Wallet!
                        </PopoverContent>
                      </Popover>
                      <Popover
                        placement="right"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <Button
                            size="lg"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center gap-3"
                          >
                            <img
                              alt="metamask"
                              src="https://www.material-tailwind.com/icons/google.svg"
                              className="h-6 w-6"
                            />
                            Continue with Google
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          You are logging in with Google account!
                        </PopoverContent>
                      </Popover>
                      <Popover
                        placement="right"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <Button
                            size="lg"
                            variant="gradient"
                            color="light-blue"
                            className="group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                          >
                            Sign in with Twitter
                            <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                              <img
                                src="https://www.material-tailwind.com/icons/twitter.svg"
                                alt="metamask"
                                className="h-6 w-6"
                              />
                            </span>
                          </Button>
                        </PopoverHandler>
                        <PopoverContent>
                          You are logging in with Google account!
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </form>
              </TabPanel>
              <TabPanel value="paypal" className="p-0">
                <Typography
                  className="mt-6 mb-2"
                  variant="h4"
                  color="blue-gray"
                >
                  Let's make a Transaction
                </Typography>
                <form className="mt-2 flex flex-col gap-4">
                  <div className="my-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Billing Address
                    </Typography>

                    <Select
                      error={showErrorr}
                      label="Country"
                      menuProps={{ className: "h-48" }}
                    >
                      {["India", "USA", "Sweden", "Australia"].map((name) => (
                        <Option key={name} value={name}>
                          {name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                  <div className="my-2">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-4 font-medium"
                    >
                      Card Details
                    </Typography>

                    <Input
                      error={showErrorr}
                      label="Card Number"
                      maxLength={19}
                      icon={
                        <CreditCardIcon className="h-5 w-5 text-blue-gray-300" />
                      }
                    />
                    <div className="my-4 flex items-center gap-4">
                      <Input label="Expires" maxLength={5} error={showErrorr} />
                      <Input
                        error={showErrorr}
                        label="CVC"
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                      />
                    </div>
                    <Input label="Holder Name" error={showErrorr} />
                  </div>
                  <Button onClick={setShowErrorr} fullWidth>
                    Show Errors
                  </Button>
                  <Button onClick={handlePayOpen} size="lg">
                    Pay Now
                  </Button>

                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </form>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="font-center">
          Form Submitted Successfully!
        </DialogHeader>
        <DialogBody>
          Thanks for being awesome!
          <br />
          We have received your message and would like to thank you for writing
          to us.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Dialog size="xs" open={payOpen} handler={handlePayOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Connect a Wallet
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handlePayOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Popular
            </Typography>
            <ul className="mt-1 -ml-2 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography color="blue-gray" variant="h6">
                  MetaMask
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Connect Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              More
            </Typography>
            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Trust Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="https://www.material-tailwind.com/icons/metamask.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
          <Typography variant="small" color="gray" className="font-normal">
            New to Ethereum wallets?
          </Typography>
          <Button variant="text" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </main>
  );
}
