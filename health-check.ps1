#!/usr/bin/env pwsh
<#
OlhaIP Health Check Script
Verify the project is in good working order
#>

Write-Host "=" * 60
Write-Host "OlhaIP Project Health Check"
Write-Host "=" * 60
Write-Host ""

# Check 1: Node and npm installed
Write-Host "[1/6] Checking Node.js and npm..."
try {
    $nodeVersion = node --version
    $npmVersion = npm --version
    Write-Host "✅ Node.js: $nodeVersion"
    Write-Host "✅ npm: $npmVersion"
}
catch {
    Write-Host "❌ Node.js or npm not found. Install from https://nodejs.org"
    exit 1
}

Write-Host ""

# Check 2: Dependencies installed
Write-Host "[2/6] Checking dependencies..."
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules directory found"
}
else {
    Write-Host "⚠️  node_modules not found. Run: npm install"
}

Write-Host ""

# Check 3: Build
Write-Host "[3/6] Running build..."
Write-Host "Building project..." -ForegroundColor Blue
$buildOutput = npm run build 2>&1
if ($buildOutput -match "Compiled successfully") {
    Write-Host "✅ Build successful"
    
    # Extract route count
    if ($buildOutput -match "(\d+) prerendered") {
        $matches[0] | Out-Null
    }
    $routeCount = ($buildOutput | Select-String "^Ôö£" | Measure-Object).Count
    Write-Host "✅ Routes generated: ~$routeCount pages"
}
else {
    Write-Host "❌ Build failed"
    Write-Host "Last 20 lines of build output:"
    $buildOutput | Select-Object -Last 20 | ForEach-Object { Write-Host "  $_" }
    exit 1
}

Write-Host ""

# Check 4: TypeScript
Write-Host "[4/6] Checking TypeScript..."
if ($buildOutput -match "Finished TypeScript") {
    Write-Host "✅ TypeScript compilation successful"
}
else {
    Write-Host "⚠️  TypeScript check unclear"
}

Write-Host ""

# Check 5: Required files
Write-Host "[5/6] Checking required files..."
$requiredFiles = @(
    "package.json",
    "tsconfig.json",
    "next.config.js",
    "src/app/layout.tsx",
    "src/app/globals.css",
    "src/lib/types.ts"
)

$allPresent = $true
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file"
    }
    else {
        Write-Host "❌ $file (MISSING)"
        $allPresent = $false
    }
}

if (-not $allPresent) {
    Write-Host ""
    Write-Host "⚠️  Some required files are missing!"
    exit 1
}

Write-Host ""

# Check 6: Build artifacts
Write-Host "[6/6] Checking build artifacts..."
if (Test-Path ".next") {
    $buildSize = (Get-ChildItem ".next" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host "✅ .next directory found (~$([Math]::Round($buildSize))MB)"
}
else {
    Write-Host "❌ .next directory not found. Run: npm run build"
    exit 1
}

Write-Host ""
Write-Host "=" * 60
Write-Host "✅ Health check complete - Project is healthy!"
Write-Host "=" * 60
Write-Host ""
Write-Host "Next steps:"
Write-Host "  • Development: npm run dev"
Write-Host "  • Production: npm run build && npm run start"
Write-Host "  • Deployment: vercel --prod"
Write-Host "  • Documentation: See PROJECT_INDEX.md"
Write-Host ""
