import { getSingleFlexCard, getDoubleFlexCard, getHeaderFlexCard } from 'Components/flex-card.js';

const RESUME_HEADER_TITLE = /*html*/ `
    <ul class="no-bullets">
        <li><h3>Feliks Peysakhov</h3></li>
    </ul>
`;

const RESUME_HEADER_BODY = /*html*/ `
    <ul class="no-bullets">
        <li>feliks.peysakhov@gmail.com</li>
    </ul>
`;

// DNT ******************************************************
const WORK_EXPERIENCE_DNT_TITLE = /*html*/ `
    <ul class="no-bullets">
        <li><h3>Dom & Tom</h3></li>
        <li>Web and Mobile Developer</li>
    </ul>
`;

const WORK_EXPERIENCE_DNT_SUMMARY = /*html*/ `
    <ul class="no-bullets">
        <li><h3>New York, NY (Remote)</h3></li>
        <li>Part-time Contractor (12-20 hr/week)</li>
        <li>April 2021 - Present</li>
    </ul>
`;

const WORK_EXPERIENCE_DNT_HEADER_WEB = /*html*/ ` 
    <h4>Web Development</h4>
`;

const WORK_EXPERIENCE_DNT_CONTENT_WEB = /*html*/ `
    <b>Full Stack Web Developer</b>
        <ul>
            <li>Tech lead on several maintenance and migration projects.</li>
            <li>Able to quickly jump into and work in existing codebases</li>
            <li>SmartMCS system maintenance with PostGres DB, Java Spring Boot, and React stack on AWS ubuntu EC2 Instance</li>
            <ul>
                <li>Resolving NGINX issues with Keyclock docker server used for authentication</li>
                <li>Updating email services for users using AWS SES</li>
                <li>Fixes for DocuSign integration</li>
                <li>Implementation of new ACH billing feature</li>
            </ul>
            <li>Event management platform with admin console maintenance</li>
            <ul>
                <li>Fully dockerized microservice application</li>
                <li>MYSQL, Node.js, Prisma ORM, GraphQL, and React web app with Amazon Cognito, Wordpress as a headless CMS, and AWS Elasticsearch</li>
                <li>Added new GraphQL mutations and updated AWS cognito packages to add admin password reset features</li>
                <li>Front end fixes for issues with Prisma caching and pagination not searching properly on material ui tables</li>
                <li>Added console to manage members of user accounts</li>    
            </ul>
            <li>Other technologies: GIT for source control and Brightsign players for TVs</li>
        </ul>
`;

const WORK_EXPERIENCE_DNT_HEADER_MOBILE = /*html*/ `
    <h4>Mobile Development</h4>
`;

const WORK_EXPERIENCE_DNT_CONTENT_MOBILE = /*html*/ `
<b>Android & React Native Development</b>
<ul>
    <li>Event management platform with admin console maintenance</li>
    <ul>
        <li>React Native</li>
        <li>Added capabilities for new CMS content schema updates</li>
        <li>Built, tested, and released iOS and Anroid apps</li>
    </ul>
    <li>Android Native BLE Device App</li>
    <ul>
        <li>Finalized and released app that was unfinished by another teandam</li>
        <li>Integrated Shopify API and Shopify MultiPass for user authentication and Clevertap Analytics platform SDK as a 'backend'</li>
        <li>Debugged and optimization of BLE connectivity and communication and app navigation with webviews</li>S
    </ul>
</ul>
`;

// PS *******************************************************
const WORK_EXPERIENCE_PS_TITLE = /*html*/ `
    <ul class="no-bullets">
        <li><h3>Persistent Systems</h3></li>
        <li>Sr. Manufacturing Engineer</li>
    </ul>
`;
const WORK_EXPERIENCE_PS_SUMMARY = /*html*/ `

    <ul class="no-bullets">
        <li> <h3>New York, NY</h3></li>
        <li>Full-time</li>
        <li>August 2019 - Present</li>
    </ul>
`;

const WORK_EXPERIENCE_PS_HEADER_SOFTWARE = /*html*/ `<h4>Software Development</h4>`;
const WORK_EXPERIENCE_PS_CONTENT_SOFTWARE = /*html*/ `
    <b>Live dashboards for production floor tvs and PCs </b>
        <ul>
            <li>Tech lead and full stack developer mentoring and training ERP analyst on backend.</li>
            <li>Data: SQL Server (Infor) and MYSQL (Legacy ERP)</li>
            <li>Application: Java Spring Boot with JPA/Hibernate custom configs for multiple databases</li>
            <li>Presentation: Vanilla JS frontend with Webpack, Bootstrap and ChartJS</li>
            <li>Other technologies: GIT for source control and Brightsign players for TVs</li>
        </ul>
    <b>Product Build Tracking technologies</b>
        <ul>
            <li>Production tool for tracking electronics assembly operations.</li>
            <li>Java Swing with SQL Server</li>
            <li>Component scanning and label printing</li>
        </ul>
    <b>Product Label Reprint Tool Suite</b>
        <ul>
            <li>Java Swing application with JDBC for MYSQL and SQL Server Databases.</li>
            <li>Integrated with Nicelabel and Codesoft Label Printing Services on Windows Server</li>
        </ul>
`;

const WORK_EXPERIENCE_PS_HEADER_ME = /*html*/ `<h4>Manufacturing Engineer</h4>`;
const WORK_EXPERIENCE_PS_CONTENT_ME = /*html*/ `
    <b>Electronics Assembly Support and Supervisor</b>
        <ul>
            <li>One manufacturing engineer directly reporting</li>
            <li>Supporting and supervising 15+ assembly technicians</li>
            <li>Trouleshooting, supporting and mainting wireless RF, TCP throughput, A/V testing systems and test systems</li>
        </ul>
    <b>Mechanical Engineering</b>
        <ul>
            <li>Solidworks - Design and fabrication of bespoke assembly fixtures for manufaturing</li>
            <li>Working with mahcine shops for tooling or 3D printing in house depending on requirements</li>
        </ul>
    <b>Electical Engineering</b>
        <ul>
            <li>PCB and cable troubleshooting</li>
            <li>Multimeter, Osciliscope, SMT Soldering</li>
        </ul>
`;

// BD *******************************************************
const WORK_EXPERIENCE_BD_TITLE = /*html*/ `
    <ul class="no-bullets">
        <li><h3>Becton Dickinson</h3></li>
        <li>Sr. Manufacturing Engineer</li>
    </ul>
`;
const WORK_EXPERIENCE_BD_SUMMARY = /*html*/ `

    <ul class="no-bullets">
        <li> <h3>Franklin Lakes, NJ</h3></li>
        <li>Full-time</li>
        <li>December 2017 - August 2019</li>
    </ul>
`;

const WORK_EXPERIENCE_BD_CONTENT = /*html*/ `
    <ul>
        <li>Industrial automation and vision system subject matter expert on interdisciplinary teams for product improvements and capacity expansion</li>
        <li>Integrated a deep learning vision system solution from Cognex for high volume inspection processes and created training model sets. Used the same software to replace a poor QOS OCR text scanning program</li>
        <li>Traveled internationally supporting installation, troubleshooting, and validation of production lines</li>
        <li>Authored and executed FAT, SAT, IQ, OQ, and PQ protocols as part of validation activities for new manufacturing equipment and processes</li>
    </ul>
`;

// WA *******************************************************
const WORK_EXPERIENCE_WA_TITLE = /*html*/ `
    <ul class="no-bullets">
        <li><h3>Weiss-Aug Co.</h3></li>
        <li>Sr. Manufacturing Engineer</li>
    </ul>
`;
const WORK_EXPERIENCE_WA_SUMMARY = /*html*/ `

    <ul class="no-bullets">
        <li> <h3>Franklin Lakes, NJ</h3></li>
        <li>Full-time</li>
        <li>December 2017 - August 2019</li>
    </ul>
`;

const WORK_EXPERIENCE_WA_CONTENT = /*html*/ `
    <ul>
        <li>Industrial automation and vision system subject matter expert on interdisciplinary teams for product improvements and capacity expansion</li>
        <li>Integrated a deep learning vision system solution from Cognex for high volume inspection processes and created training model sets. Used the same software to replace a poor QOS OCR text scanning program</li>
        <li>Traveled internationally supporting installation, troubleshooting, and validation of production lines</li>
        <li>Authored and executed FAT, SAT, IQ, OQ, and PQ protocols as part of validation activities for new manufacturing equipment and processes</li>
    </ul>
`;

export default () => {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getHeaderFlexCard(RESUME_HEADER_TITLE, RESUME_HEADER_BODY));
    fragment.appendChild(
        getDoubleFlexCard(
            WORK_EXPERIENCE_DNT_TITLE,
            WORK_EXPERIENCE_DNT_SUMMARY,
            WORK_EXPERIENCE_DNT_HEADER_WEB,
            WORK_EXPERIENCE_DNT_CONTENT_WEB
        )
    );
    fragment.appendChild(getSingleFlexCard(WORK_EXPERIENCE_DNT_HEADER_MOBILE, WORK_EXPERIENCE_DNT_CONTENT_MOBILE));
    fragment.appendChild(
        getDoubleFlexCard(
            WORK_EXPERIENCE_PS_TITLE,
            WORK_EXPERIENCE_PS_SUMMARY,
            WORK_EXPERIENCE_PS_HEADER_SOFTWARE,
            WORK_EXPERIENCE_PS_CONTENT_SOFTWARE
        )
    );
    fragment.appendChild(getSingleFlexCard(WORK_EXPERIENCE_PS_HEADER_ME, WORK_EXPERIENCE_PS_CONTENT_ME));
    fragment.appendChild(
        getDoubleFlexCard(WORK_EXPERIENCE_BD_TITLE, WORK_EXPERIENCE_BD_SUMMARY, null, WORK_EXPERIENCE_BD_CONTENT)
    );
    return fragment;
};
