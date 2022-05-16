// Detect Safari
            let safariAgent = 
                userAgentString.indexOf("Safari") > -1;
                  
            // Discard Safari since it also matches Chrome
            if ((chromeAgent) && (safariAgent)) 
                safariAgent = false;

document.querySelector(".output-safari").textContent
                        = safariAgent;