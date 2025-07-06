import { Body, Controller, ParseIntPipe, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth") 
export class AuthController {
  constructor(private authService:AuthService) {

  }
  // @Post("signup")
  // signup(
  //   @Body('email') email: string,
  //   @Body('password',ParseIntPipe) password: string){
  //   console.log({ 
  //     email ,
  //     typeofEmail:typeof email, 
  //     password, 
  //     typeofPass:typeof password });
  //   // console.log("Request body:", req.body);
  //   // return "I am signup";
  //   return this.authService.signup();
  // }
  @Post("signup")
  signup(
    @Body()dto:AuthDto){
    console.log("Signup DTO:", dto);
    return this.authService.signup(dto);
  }

  @Post("signin")
  signin(@Body() dto:AuthDto){
    // return "I am signin";
    return this.authService.login(dto);
  }

} 