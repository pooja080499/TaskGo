<b>1: How long did you spend on the coding test?</b><br>
=> I spent approximately 30 hours on the coding test.

<hr>

<b>2:What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.</b><br>
=>One of the most useful features introduced in React 19 is the useId hook. This hook simplifies the process of generating unique IDs in functional components, which is particularly useful for handling dynamic content such as forms or lists. Prior to this, developers often had to manually generate unique IDs, which could lead to conflicts or errors in applications with complex components.
Here's an example of how to use the useId hook to generate unique IDs for form elements:
import React, { useState } from 'react';

function MyForm() {
  const id = useId(); // Generate a unique ID for the form elements
  const [name, setName] = useState('');

  return (
    <form>
      <label htmlFor={${id}-name}>Name:</label>
      <input
        id={${id}-name} // Use the unique ID for the input element
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

In this example, useId ensures that the input element has a unique id even if there are multiple forms or similar components on the page. This makes it easier to manage and avoid ID conflicts, especially in large applications with complex UI structures

<hr>

<b>How would you track down a performance issue in production? Have you ever had to do this?</b><br>
=>Tracking down performance issues in production is crucial to maintaining a responsive and reliable application. Here’s a systematic approach I follow:
1. Monitor Performance Metrics

    Use monitoring tools (like New Relic, Datadog, or AWS CloudWatch) to check key metrics such as response time, CPU, memory, disk usage, and network speed.
    Look for patterns or spikes in errors or slow responses to spot potential problems early.

2. Identify Problematic Endpoints or Functions

    Look for parts of the application that are taking longer than expected to process or respond. Monitoring tools can help you find these "slow spots."
    If the issue is related to the database, check for slow queries using tools that analyze database performance.

3. Use Logs for Insights

    Add detailed logs to track where things might be slowing down in your code.
    Use tools like ELK Stack or Splunk to manage and analyze your logs. They help you find patterns and any unusual behavior in your app.

4. Check Resource Utilization

    Check if your servers are running out of CPU, memory, or disk space. If you're using containers (like Docker or Kubernetes), make sure they have enough resources to run smoothly.

5. Conduct Load Testing

    Use load testing tools (such as JMeter or k6) to simulate high traffic and see how your app performs. This helps you find bottlenecks before they cause issues for real users.

6. Examine Frontend Performance

    For web apps, use browser tools like Chrome DevTools to check how fast pages load. Look for large images, slow JavaScript, or other things that could be slowing down your site.

7. Use Caching

    If performance issues keep happening, consider using caching. This can reduce the load on your servers and speed up response times, especially for data that doesn’t change often.

By following these steps, you can track down and fix performance issues in production and keep your app running smoothly.

<hr>

<b>3: If you had more time, what additional features or improvements would you consider adding to the task management application?</b><br>
=> 1.User Authentication and Authorization*
   - *Description*: Implement user registration and login functionality so that each user can manage their own tasks.
Technology**: Integration with OAuth (e.g., Google, GitHub) or JWT (JSON Web Tokens) for session management.

  2. Task Reminders and Notifications
   - Description: Add reminders via notifications for upcoming deadlines or overdue tasks.
Technology**: Use browser notifications or email notifications (via services like SendGrid or Firebase Cloud Messaging).

 3. Due Date Calendar View
   - *Description*: Add a calendar view to visualize tasks by their due dates, allowing users to see their schedule at a glance.Technology: Integrate a calendar library (e.g., FullCalendar) for React to display tasks based on due dates.
  


