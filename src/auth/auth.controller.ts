import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth") 
export class AuthController {
  constructor(private authService:AuthService) {

  }
  @Post("signup")
  signup() {
    // return "I am signup";
    return this.authService.signup();
  }

  @Post("signin")
  signin() {
    // return "I am signin";
    return this.authService.login();
  }

} 