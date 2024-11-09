from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

#defines the web browsers and wait
driver = webdriver.Firefox()
wait = WebDriverWait(driver, 10)

first = "John"
last_name = "Doe"
phone_number = "1234567890"
comments = "There is a pothole on the main road that needs urgent attention"



try:
    driver.get("https://www.troyny.gov/FormCenter/Public-Works-Streets-9/Report-a-Pothole-55")
    time.sleep(2)

    # Fill in the first name, last name, and phone number fields
    for i in range(3):
        try:
            name_field = wait.until(EC.presence_of_element_located((By.ID, f'e_{i}')))
            name_field.send_keys(f'Text {i}')
        except Exception as e:
            print(f"Could not find element e_{i}: {e}")

    # Select the radio boxes
    for j in range(5):
        try:
            checkbox = wait.until(EC.element_to_be_clickable((By.ID, f'e_6_{j}')))
            if not checkbox.is_selected():
                checkbox.click()
        except Exception as e:
            print(f"Could not find checkbox e_6_{j}: {e}")

    #Locate and interact with the text area  
    try:
        text_area = wait.until(EC.element_to_be_clickable((By.ID, 'e_7')))
    except Exception as e:
        print(f"Could not finf text are e_7")

    # Additonal interactions 
    for j in range(4):
        try:
            checkbox = wait.until(EC.element_to_be_clickable((By.ID, f'e_6_{j}')))
            if not checkbox.is_selected():
                checkbox.click()
        except Exception as e:
            print(f"Could not find checkbox e_6_{j}: {e}")

    for j in range(4):
        try:
            checkbox = wait.until(EC.element_to_be_clickable((By.ID, f'e_6_{j}')))
            if not checkbox.is_selected():
                checkbox.click()
        except Exception as e:
            print(f"Could not find checkbox e_6_{j}: {e}")

    try:
        text_area = wait.until(EC.element_to_be_clickable((By.ID, 'e_7')))
    except Exception as e:
        print(f"Could not find text are e_7: {e}")

    try:
        want_copy = wait.until(EC.element_to_be_clickable((By.ID, 'wantCopy')))
    except Exception as e:
        print(f"Could not find the wantCopy checkbox: {e}")
        
    try:
        submit_button = wait.until(EC.element_to_be_clickable((By.ID, 'btnFormSubmit')))
        submit_button.click()
    except Exception as e:
        print("Could not find the submit button:", e)

    





finally:
    driver.quit()



