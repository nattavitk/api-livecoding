authentication_token
:
"dc2d2325-13e7-44cd-a14c-e3db18586a64"
command
:
"DC_DATA = ''↵DC_DATA = paste0(DC_DATA, '{"DC_PEC":"# no pec","DC_SCT":"test_output_contains(\\"18\\", incorrect_msg = \\"Make sure to add `6 + 12`\\non\\na new line. Do not start the line with a `#`, otherwise your R code is not executed!\\")\\nsuccess_msg(\\"Awesome! See how the console shows the result of the R code you\\nsubmitted? Now that you\'re familiar with the interface, let\'s get down to R\\nbusiness!\\")","DC_SOLUTION":"# Calculate 3 + 4\\n3 + 4\\n\\n# Calculate 6 + 12\\n6 + 12","DC_RENDER_HEIGHT":400,"DC_RENDER_WIDTH":635,"DC_TYPE":"NormalExercise","DC_CODE":"# Calculate 3 + 4\\n3 + 4\\n\\n# Calculate 6 + 12","DC_ECHO":true,"DC_COMMAND":"submit"}')↵execute(DC_DATA)"




[1] "[{\"type\":\"code\",\"payload\":\"# Calculate 3 + 4\"},{\"type\":\"code\",\"payload\":\"3 + 4\"},{\"type\":\"output\",\"payload\":\"[1] 7\"},{\"type\":\"code\",\"payload\":\"\"},{\"type\":\"code\",\"payload\":\"# Calculate 6 + 12\"},{\"type\":\"sct\",\"payload\":{\"correct\":false,\"message\":\"Make sure to add <code>6 + 12</code>\\non\\na new line. Do not start the line with a <code>#</code>, otherwise your R code is not executed!\\n\"}}]"
> 



# Calculate 3 + 4
3 + 4


# Calculate 6 + 12



"#test comment 1\\n3 + 5\\n\\n# description 2\\n28 %% 6\\n\\nx <- 10\\nprint(x)"

{
	"lang": "r",
	"command": [
		"#test comment 1",
		"3 + 5",
		"",
		"# description 2",
		"28 %% 6",
		"",
		"x <- 10",
		"print(x)"
		]
}



DC_DATA = paste0(DC_DATA, '{
	"DC_PEC":"# no pec",
	"DC_SCT":"test_output_contains(\\"18\\",
	 incorrect_msg = \\"Make sure to add `6 + 12`\\non\\na new line. Do not start the line with a `#`, otherwise your R code is not executed!\\")
	\\nsuccess_msg(\\"Awesome! See how the console shows the result of the R code you\\nsubmitted? Now that you\'re familiar with the interface, let\'s get down to R\\nbusiness!\\")"
	,"DC_SOLUTION":"# Calculate 3 + 4\\n3 + 4\\n\\n# Calculate 6 + 12\\n6 + 12",
	"DC_RENDER_HEIGHT":400,
	"DC_RENDER_WIDTH":619,
	"DC_TYPE":"NormalExercise",
	"DC_CODE":"# Calculate 3 + 4\\n3 + 4\\n\\n# Calculate 6 + 12\\n",
	"DC_ECHO":true,
	"DC_COMMAND":"submit"}')
execute(DC_DATA)"



[1] "[{\"type\":\"code\",\"payload\":\"# Calculate 3 + 4\"},
	{\"type\":\"code\",\"payload\":\"3 + 4\"},
	{\"type\":\"output\",\"payload\":\"[1] 7\"},
	{\"type\":\"code\",\"payload\":\"\"},
	{\"type\":\"code\",\"payload\":\"# Calculate 6 + 12\"},
	{\"type\":\"code\",\"payload\":\"9 * 2\"},
	{\"type\":\"output\",\"payload\":\"[1] 18\"},
	{\"type\":\"sct\",\"payload\":{\"correct\":true,\"message\":\"Awesome! See how the console shows the result of the R code you\\nsubmitted? Now that you&#39;re familiar with the interface, let&#39;s get down to R\\nbusiness!\\n\"}}]"
> 