import { Button } from "components/button";
import { ButtonGoogle } from "components/button";
import { IconEyeToggle } from "components/icons";
import { Input } from "components/input";
import { Label } from "components/label";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormGroup from "components/common/FormGroup";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import useToggleValue from "hooks/useToggleValue";
import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const SignInPage = () => {
  const schema = yup.object({
    email: yup.string().email("Invalid Email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const dispatch = useDispatch();

  const handleSignIn = (values) => {
    dispatch(authLogin(values));
  };

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with Google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email"> Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@example.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password"> Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? "text" : "password"}`} // show password
            name="password"
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot Password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full" kind="primary" type="submit">
          Log in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
