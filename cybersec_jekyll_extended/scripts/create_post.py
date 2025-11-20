
import sys
from datetime import datetime
import os

title = " ".join(sys.argv[1:])
slug = title.lower().replace(" ", "-")
date = datetime.now().strftime("%Y-%m-%d")
filename = f"_posts/{date}-{slug}.md"

os.makedirs("_posts", exist_ok=True)

with open(filename, "w") as f:
    f.write(f"""---
layout: post
title: "{title}"
categories: []
---

Write your content here.
""")

print(f"Created {filename}")
