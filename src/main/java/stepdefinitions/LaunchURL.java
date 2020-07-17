package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LaunchURL {

	static WebDriver driver;
	String url = "http://elearningm1.upskills.in" ;
	@Given("^I want to launch elearning url$")
	public void i_want_to_launch_elearning_url() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
	}
	@Then("^I want to enter username \"([^\"]*)\"$")
	public void i_want_to_enter_username(String username) throws Throwable {
		driver.findElement(By.cssSelector("input#login")).sendKeys(username);
	}

	@And("^I want to enter password \"([^\"]*)\"$")
	public void i_want_to_enter_password(String pwd) throws Throwable {
	   driver.findElement(By.cssSelector("input#password")).sendKeys(pwd);
	}

	@When("^I click on login button$")
	public void i_click_on_login_button() throws Throwable {
		driver.findElement(By.cssSelector("[name='submitAuth']")).click();
		
	}
	
	@Given("^I want to Add a user$")
	public void i_want_to_Add_a_user() throws Throwable {
	   driver.findElement(By.xpath("//a[contains(text(),'Administration')]")).click();
	   driver.findElement(By.xpath("//a[contains(text(),'Add a user')]")).click();
	}
	@Then("^I want to enter credentials")
}
