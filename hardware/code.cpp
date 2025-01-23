#include <Arduino_GigaDisplay_GFX.h>  
#include <Adafruit_GFX.h>            
#include <Fonts/FreeSans9pt7b.h>

#define BLACK 0x0000 
#define WHITE 0xFFFF  
#define RED 0xF800    
#define GREEN 0x07E0  
#define BLUE 0x001F  
#define BORDER_COLOR 0xa3cc95  
#define BG_COLOR 0xDEDEDE      
#define BETA 3950

const int buzzPin = 8;         
const int thermistorPin = A0; 

int seconds = 0;
int totalTempC = 0;
int totalTempF = 0;
int avgTempCMin = 0;
int avgTempFMin = 0;
int minutes = 0;
int row = 0;

GigaDisplay_GFX display;

void setup() {
  pinMode(buzzPin, OUTPUT);  
  display.begin();           
  display.setRotation(1);    

  display.fillScreen(BORDER_COLOR);
  display.fillRect(20, 20, 760, 440, BG_COLOR);

  display.setFont(&FreeSans9pt7b);
  display.setTextColor(WHITE, BG_COLOR);
  display.setTextSize(3);
  display.setCursor(30, 230);  
  display.println("CareNest Temperature Monitor");
  delay(2000); 

  display.fillScreen(BORDER_COLOR);
  display.fillRect(20, 20, 760, 440, BG_COLOR);
}

void loop() {
  int analogValue = analogRead(thermistorPin);

  float temperatureC = BETA / (log((1025.0 * 10 / analogValue - 10) / 10) + BETA / 298.0) - 300.0;
  float temperatureF = 1.8 * temperatureC + 32.0;

  display.setTextColor(WHITE, BG_COLOR);
  display.fillRect(20, 180, 450, 100, BG_COLOR);
  display.fillRect(20, 230, 500, 100, BG_COLOR);

  display.setTextSize(1);
  display.setCursor(520, 180);
  display.print("Avg. Temp/Min over 5 minutes");

  totalTempC += temperatureC;
  totalTempF += temperatureF;
  seconds++;

  totalTempC += temperatureC;
  totalTempF += temperatureF;
  seconds++;

  if (seconds >= 60) 
  {
    float avgTempCMin = totalTempC / 60;
    float avgTempFMin = totalTempF / 60;

    display.setCursor(550, 220 + (row * 30)); // Adjust rows dynamically
    display.setTextSize(1); // Set text size for readability
    display.setTextColor(WHITE, BG_COLOR);
    display.print(minutes + 1);
    display.print(": ");
    display.print(avgTempCMin, 1);
    display.print(" C / ");
    display.print(avgTempFMin, 1);
    display.print(" F");

    totalTempC = 0;
    totalTempF = 0;
    seconds = 0;
    row++;
    minutes++;

    if (minutes == 6) 
    {
      minutes = 0;
      row = 0;

      display.fillRect(530, 200, 230, 200, BG_COLOR);
    }
  }
  
  display.setTextSize(2);
  display.setCursor(30, 70);  
  display.println("CareNest Temperature Monitor");

  display.setCursor(30, 140);
  display.print("Current Temperature: ");

  display.setTextSize(3);
  display.setCursor(30, 220);
  display.print("Celsius: ");
  display.print(temperatureC, 1); 
  display.print(" C");

  display.setCursor(30, 270);
  display.print("Fahrenheit: ");
  display.print(temperatureF, 1); 
  display.print(" F");

  if (temperatureC > 37.5 || temperatureF > 99.5) 
  {  
    display.setTextColor(RED, BG_COLOR);
    display.setCursor(30, 340);
    display.setTextSize(3);
    display.print("ALERT: High Temp!");
    digitalWrite(buzzPin, HIGH);  
  } 
  else 
  {
    display.fillRect(30, 300, 500, 100, BG_COLOR);
    digitalWrite(buzzPin, LOW);
  }

  delay(1000);  
}