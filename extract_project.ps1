# extract_project.ps1
# Usage: ./extract_project.ps1

$source = Get-Location
$destination = "$source\..\ecommerce-dashboard"

Write-Host "🚀 Starting Extraction of ENHANCED E-Commerce Dashboard..." -ForegroundColor Cyan

# 1. Create Directory
if (!(Test-Path $destination)) {
    New-Item -ItemType Directory -Force -Path $destination | Out-Null
    Write-Host "Created folder at $destination" -ForegroundColor Green
} else {
    Write-Host "Folder $destination already exists. Updating..." -ForegroundColor Yellow
}

# 2. Scaffolding Base
Copy-Item "$source\package.json" -Destination $destination
Copy-Item "$source\tsconfig.json" -Destination $destination
Copy-Item "$source\tailwind.config.ts" -Destination $destination
Copy-Item "$source\postcss.config.mjs" -Destination $destination
Copy-Item "$source\next.config.ts" -Destination $destination
Copy-Item "$source\.gitignore" -Destination $destination

# Copy shared utilities
if (!(Test-Path "$destination\utils")) { New-Item -ItemType Directory -Force -Path "$destination\utils" | Out-Null }
Copy-Item "$source\utils\*" -Destination "$destination\utils" -Recurse -Force
if (!(Test-Path "$destination\public")) { New-Item -ItemType Directory -Force -Path "$destination\public" | Out-Null }
Copy-Item "$source\public\*" -Destination "$destination\public" -Recurse -Force

# 3. Create Specific Folders (Matching depth to avoid import errors)
New-Item -ItemType Directory -Force -Path "$destination\app\demos\ecommerce" | Out-Null
New-Item -ItemType Directory -Force -Path "$destination\components\demos\ecommerce" | Out-Null
New-Item -ItemType Directory -Force -Path "$destination\components\ui" | Out-Null
New-Item -ItemType Directory -Force -Path "$destination\data\demos\ecommerce" | Out-Null
New-Item -ItemType Directory -Force -Path "$destination\types\demos" | Out-Null

# 4. Copy Dashboard Code
# We will copy the content of /demos/ecommerce content to the root of the new app to simplify it slightly,
# OR we can keep the structure to minimize refactoring risk. 
# Let's keep strict structure first to ensure 100% functionality.

# APP
Copy-Item "$source\app\demos\ecommerce\*" -Destination "$destination\app\demos\ecommerce" -Recurse -Force
Copy-Item "$source\app\globals.css" -Destination "$destination\app"
Copy-Item "$source\app\fonts.ts" -Destination "$destination\app"

# COMPONENTS
Copy-Item "$source\components\demos\ecommerce\*" -Destination "$destination\components\demos\ecommerce" -Recurse -Force
Copy-Item "$source\components\ui\*" -Destination "$destination\components\ui" -Recurse -Force

# DATA
Copy-Item "$source\data\demos\ecommerce\*" -Destination "$destination\data\demos\ecommerce" -Recurse -Force

# TYPES
Copy-Item "$source\types\demos\*" -Destination "$destination\types\demos" -Recurse -Force

# ROOT PAGE REDIRECT
# Since we are keeping the deep path /demos/ecommerce to avoid refactoring imports like @/components/demos/ecommerce/...
# We need a root page that redirects there.
Set-Content -Path "$destination\app\page.tsx" -Value 'import { redirect } from "next/navigation"; export default function Home() { redirect("/demos/ecommerce"); }'

# 7. Git Init
Set-Location $destination
git init
Write-Host "✅ Extraction Complete!" -ForegroundColor Green
Write-Host "To finish setup:"
Write-Host "1. cd ../ecommerce-dashboard"
Write-Host "2. npm install"
Write-Host "3. npm run dev"
