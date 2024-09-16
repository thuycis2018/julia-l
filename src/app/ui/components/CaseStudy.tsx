import React from 'react';
import { FaChalkboardTeacher, FaProjectDiagram, FaTools, FaTasks, FaUserFriends, FaClock, FaSmile, FaChartLine } from 'react-icons/fa';

const CaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-green-5 text-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Agile Adoption Case Study</h1>
        <p className="text-lg">How I Successfully Transitioned a Web Development Team to Agile</p>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-green-5">Background</h2>
          <p className="mt-4">
            A mid-sized tech company providing internet security solutions was facing several operational challenges in its web development processes. The company had a growing number of feature requests from different departments, each with its own set of priorities, leading to constant pressure on the development team. Without a structured prioritization process, teams often found themselves juggling conflicting demands, resulting in:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-5 mt-4">
            <li>Frequent interruptions to ongoing projects.</li>
            <li>Lack of clarity on what should be prioritized, often leading to rushed decisions.</li>
            <li>Slowdown in feature delivery as the team struggled to address requests from multiple stakeholders at once.</li>
          </ul>
          <p className="mt-4">
            As a result, the development team was overwhelmed, with tasks often being re-prioritized. Additionally, the lack of alignment between departments meant that essential projects were sometimes being delayed in favor of less critical tasks.
          </p>
          <p className="mt-4">
            To solve these issues, I started implementing Agile practices. My goal was to establish a structured approach to feature prioritization, streamline communication across departments, and improve overall delivery times by aligning teams under a unified strategy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-green-5">Challenges</h2>
          <ul className="list-disc list-inside space-y-2 ml-5">
            <li>Long list of feature requests from different departments.</li>
            <li>Conflicting priorities across teams and stakeholders.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-green-5">Solution: Agile Adoption</h2>
          <ul className="list-none space-y-6">
            <li>
              <FaChalkboardTeacher data-testid="FaChalkboardTeacher" className="inline text-xl mr-2 mb-2 text-orange-500" />
              <span className="text-xl font-semibold p-2 text-green-5">Phase 1 - Training and Alignment:</span> 
              I started with Agile training, role redefinition, and a pilot project to gradually introduce Agile practices without overwhelming the team.
            </li>
            <li>
              <FaProjectDiagram data-testid="FaProjectDiagram" className="inline text-xl mr-2 mb-2 text-orange-500" />
              <span className="text-xl font-semibold p-2 text-green-5">Phase 2 - Implementing Agile Processes:</span> 
              Introduced 1-week sprints, daily standups, short sprint reviews, and retrospectives. Teams began collaborating 
              more closely and breaking down features into smaller tasks for iterative delivery.
            </li>
            <li>
              <FaTools data-testid="FaTools" className="inline text-xl mr-2 mb-2 text-orange-500" />
              <span className="text-xl font-semibold p-2 text-green-5">Phase 3 - Continuous Improvement: </span> 
              Implemented Kanban for bug fixes and maintenance, and cross-functional teams to enhance 
              productivity and quality.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-green-5">Results</h2>

          <ul className="list-none space-y-6">
            <li>
              <FaTasks data-testid="FaTools" className="inline text-xl mr-2 mb-2 text-green-5" />
              <span className="text-xl font-semibold p-2 text-green-5">Streamlined Prioritization Process:</span> 
              A clear framework for evaluating and prioritizing features was established, leading to better alignment between departments, reduction in bottlenecks, and faster decision-making.
            </li>
            <li>
              <FaUserFriends data-testid="FaUserFriends" className="inline text-xl mr-2 mb-2 text-green-5" />
              <span className="text-xl font-semibold p-2 text-green-5">Increased Cross-Department Collaboration:</span> 
              Improved communication between departments reduced conflicts and enhanced collaboration through regular stakeholder meetings and clearer roles.
            </li>
            <li>
              <FaClock data-testid="FaClock" className="inline text-xl mr-2 mb-2 text-green-5" />
              <span className="text-xl font-semibold p-2 text-green-5">Faster Delivery and Reduced Overload:</span> 
              Agile practices enabled more frequent, incremental releases, reducing backlog overload and improving focus on high-priority tasks.
            </li>
            <li>
              <FaSmile data-testid="FaSmile" className="inline text-xl mr-2 mb-2 text-green-5" />
              <span className="text-xl font-semibold p-2 text-green-5">Improved Stakeholder Satisfaction:</span> 
              Enhanced transparency and realistic expectations led to increased stakeholder satisfaction and a more structured feedback loop.
            </li>
            <li>
              <FaChartLine data-testid="FaChartLine" className="inline text-xl mr-2 mb-2 text-green-5" />
              <span className="text-xl font-semibold p-2 text-green-5">Increased Focus on High-Impact Features:</span> 
              Prioritization improvements allowed the team to deliver valuable features first and manage feature churn more effectively.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CaseStudy;
