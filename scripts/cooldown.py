#!/usr/bin/env python3
import time
import sys

def main():
    try:
        wait_time = int(sys.argv[1]) if len(sys.argv) > 1 else 60
    except ValueError:
        wait_time = 60
    
    print(f"⏳ Zown Gemini Governor: Cooling down for {wait_time} seconds to refill TPM bucket...")
    time.sleep(wait_time)
    print("✅ Cool-down complete. Proceeding with atomic task.")

if __name__ == "__main__":
    main()
