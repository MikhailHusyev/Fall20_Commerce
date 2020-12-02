package com.covidroomtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.*;;

@Controller
@SpringBootApplication
public class CovidRoomTrackerApplication {

	@RequestMapping("/")
    @ResponseBody
    public String home() {
      return "Hello World!";
	}

	public static void main(String[] args) {
		SpringApplication.run(CovidRoomTrackerApplication.class, args);
	}

}
