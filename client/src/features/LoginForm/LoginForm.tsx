import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
export const LoginForm = () => {
  return (
    <div className="fixed top-[50%] left-[50%] w-96 bg-red-700">
    <Card className="w-96" placeholder={undefined}>
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center" placeholder={undefined}      >
        <Typography variant="h3" color="black" placeholder={undefined}>
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4" placeholder={undefined}>
        <Input label="Email" size="lg" crossOrigin={undefined} />
        <Input label="Password" size="lg" crossOrigin={undefined} />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" crossOrigin={undefined} />
        </div>
      </CardBody>
      <CardFooter className="pt-0" placeholder={undefined}>
        <Button variant="gradient" fullWidth  placeholder={undefined}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center"  placeholder={undefined}>
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold" placeholder={undefined}          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card></div>
  )
}

