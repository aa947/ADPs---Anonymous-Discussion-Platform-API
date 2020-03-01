[![Run on Repl.it](https://repl.it/badge/github/aa947/boilerplate-project-messageboard)](https://repl.it/github/aa947/boilerplate-project-messageboard)

## ADPs - Anonymous Discussion Platform API
------

### In this project: 
<p> In this project:
<ol>
<li>
Only this site is allowed to load iFrames from its pages.
DNS prefetching is not allowed. </li>
<li>
POST a discussion to a specific topic by passing form data text and delete_password and _id, text, created_on(date&time), bumped_on(date&time, starts same as created_on), reported(boolean), delete_password, & replies(array). </li>
 <li> POST a reply to a discussion on a specific topic by passing form data text, delete_password, & thread_id and it will also update the bumped_on date to the reply date. In the discussion's 'replies' array will be saved _id, text, created_on, delete_password, & reported. </li>
<li> GET an array of the most recent 10 bumped discussions on the topic with only the most recent 3 replies from. The reported and delete_passwords fields will not be sent. </li>
<li> GET an entire discussion with all its replies from. Also hiding the same fields. </li>
<li> delete a discussion completely if I send a DELETE request and pass along the discussion id & delete_password. (Text response will be 'incorrect password' or 'success'). </li>
<li> delete a reply(just changing the text to '[deleted]') by sending a DELETE request and pass along the discussion id, reply_id, & delete_password. (Text response will be 'incorrect password' or 'success'). </li>
<li> report a discussion and change it's reported value to true by sending a PUT request and pass along the discussion id. (Text response will be 'success'). </li>
<li> report a reply and change it's reported value to true by sending a PUT request and pass along the discussion id & reply_id. (Text response will be 'success'). </li>
</ol>
</p>

