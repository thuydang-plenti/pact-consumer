$pactStubServerLocation = $env:pactStubServer + '\pact-stub-server.exe'
$currentLocation = (Get-Location).Path
$pactFilePath = '\pact\pacts\'
$workflowServicePactFile =  'workflowServiceConsumer-workflowServiceProvider.json'
$workflowServiceFullPactPath = $currentLocation + $pactFilePath + $workflowServicePactFile

&$pactStubServerLocation $params

$params = $args.Clone()
$params += '-o'
$params += '-f'
$params += $workflowServiceFullPactPath
$params += '-p'
$params += 4002

&$pactStubServerLocation $params
