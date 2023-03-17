$pactStubServerLocation = $env:pactStubServer + '\pact-stub-server.exe'
$currentLocation = (Get-Location).Path
$pactFilePath = '\pact\pacts\'
$applicationServicePactFile =  'ApplicationServiceConsumer-ApplicationServiceProvider.json'
$applicationServiceFullPactPath = $currentLocation + $pactFilePath + $applicationServicePactFile

$params = $args.Clone()
$params += '-o'
$params += '-f'
$params += $applicationServiceFullPactPath
$params += '-p'
$params += 4001

&$pactStubServerLocation $params


