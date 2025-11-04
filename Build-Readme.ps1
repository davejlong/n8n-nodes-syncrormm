function Get-SwaggerEndpoints {
    # Read and parse the swagger.json file
    $swaggerUri = "https://api-docs.syncromsp.com/swagger.json"
    Invoke-RestMethod $swaggerUri -OutFile "swagger.json"
		$swagger = Get-Content "swagger.json" -Raw | ConvertFrom-Json

    # Create hashtable to store grouped endpoints
    $groupedEndpoints = @{}

    # Loop through each path
    $swagger.paths.PSObject.Properties | ForEach-Object {
        $path = $_.Name
        $methods = $_.Value.PSObject.Properties

        # Loop through each HTTP method for the path
        $methods | ForEach-Object {
            $method = $_.Name.ToUpper()
            $summary = $_.Value.summary
            $tags = $_.Value.tags

            # Add to appropriate tag group
            foreach ($tag in $tags) {
                if (-not $groupedEndpoints.ContainsKey($tag)) {
                    $groupedEndpoints[$tag] = @()
                }
                $groupedEndpoints[$tag] += "$method $path - $summary"
            }
        }
    }

    # Output grouped endpoints
    foreach ($tag in ($groupedEndpoints.Keys | Sort-Object)) {
        Write-Output "`n### $tag`n"
        $groupedEndpoints[$tag] | ForEach-Object {
            Write-Output "* [ ] $_"
        }
    }
}

# Run the function
Get-SwaggerEndpoints
