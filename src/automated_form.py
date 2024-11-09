from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

#defines the web browsers 
driver = webdriver.Firefox()
wait = WebDriverWait(driver, 10)

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
        print(f"Could not finf text are e_7")

finally:
    driver.quit()



