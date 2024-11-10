import sys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Command-line arguments
first_name = sys.argv[1]
last_name = sys.argv[2]
phone_number = sys.argv[3]
comments = sys.argv[4]

# Initialize web driver
driver = webdriver.Firefox()
wait = WebDriverWait(driver, 10)

try:
    driver.get("https://www.troyny.gov/FormCenter/Public-Works-Streets-9/Report-a-Pothole-55")
    time.sleep(2)

    # Fill in the form using data from the command-line arguments
    try:
        name_field = wait.until(EC.presence_of_element_located((By.ID, 'e_0')))
        name_field.send_keys(first_name)
    except Exception as e:
        print("Error finding or filling the first name:", e)

    try:
        last_name_field = wait.until(EC.presence_of_element_located((By.ID, 'e_1')))
        last_name_field.send_keys(last_name)
    except Exception as e:
        print("Error finding or filling the last name:", e)

    try:
        phone_field = wait.until(EC.presence_of_element_located((By.ID, 'e_2')))
        phone_field.send_keys(phone_number)
    except Exception as e:
        print("Error finding or filling the phone number:", e)

    try:
        text_area = wait.until(EC.presence_of_element_located((By.ID, 'e_7')))
        text_area.send_keys(comments)
    except Exception as e:
        print("Error finding or filling the comments:", e)

    # Locate and submit the form
    try:
        submit_button = wait.until(EC.element_to_be_clickable((By.ID, 'btnFormSubmit')))
        submit_button.click()
    except Exception as e:
        print("Error finding or clicking submit button:", e)

finally:
    driver.quit()
