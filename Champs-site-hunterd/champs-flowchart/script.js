// Tooltip content for each section
const tooltipContent = {
    home: "Access your main dashboard with all GoHighLevel features",
    contacts: "Manage your contact database and customer information",
    appointments: "Schedule and manage customer appointments",
    automation: "Set up automated workflows and campaigns",
    marketing: "Create and track marketing campaigns",
    reporting: "Generate and analyze performance reports"
};

// Add tooltips to cards
document.querySelectorAll('.flowchart-card').forEach(card => {
    const section = card.dataset.section;
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipContent[section];
    card.appendChild(tooltip);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button click handlers
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.flowchart-card');
        const section = card.dataset.section;
        
        // Handle different button actions based on section
        switch(section) {
            case 'home':
                window.open('https://app.gohighlevel.com/dashboard', '_blank');
                break;
            case 'contacts':
                window.open('https://app.gohighlevel.com/contacts', '_blank');
                break;
            case 'appointments':
                window.open('https://app.gohighlevel.com/calendar', '_blank');
                break;
            case 'automation':
                showAutomationTips();
                break;
            case 'marketing':
                window.open('https://app.gohighlevel.com/marketing', '_blank');
                break;
            case 'reporting':
                showReportPreview();
                break;
        }
    });
});

// Show automation tips in a modal
function showAutomationTips() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Automation Tips</h2>
            <ul>
                <li>Set up welcome emails for new contacts</li>
                <li>Create appointment reminder sequences</li>
                <li>Automate follow-up messages</li>
                <li>Schedule social media posts</li>
                <li>Set up lead scoring workflows</li>
            </ul>
            <button class="close-modal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 500px;
            width: 90%;
        }
        .modal-content h2 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        .modal-content ul {
            list-style-type: none;
            margin-bottom: 1.5rem;
        }
        .modal-content li {
            margin-bottom: 0.5rem;
            padding-left: 1.5rem;
            position: relative;
        }
        .modal-content li:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            left: 0;
        }
        .close-modal {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Show report preview
function showReportPreview() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Report Preview</h2>
            <div class="report-preview">
                <div class="report-chart">
                    <div class="chart-bar" style="height: 60%"></div>
                    <div class="chart-bar" style="height: 80%"></div>
                    <div class="chart-bar" style="height: 40%"></div>
                    <div class="chart-bar" style="height: 70%"></div>
                </div>
                <div class="report-stats">
                    <p>Total Contacts: 1,234</p>
                    <p>Active Campaigns: 5</p>
                    <p>Appointments: 89</p>
                    <p>Conversion Rate: 15%</p>
                </div>
            </div>
            <button class="close-modal">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Add report preview styles
    const style = document.createElement('style');
    style.textContent = `
        .report-preview {
            margin: 1.5rem 0;
        }
        .report-chart {
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            height: 200px;
            margin-bottom: 1.5rem;
            padding: 1rem;
            background-color: var(--accent-color);
            border-radius: 5px;
        }
        .chart-bar {
            width: 40px;
            background-color: var(--primary-color);
            border-radius: 5px 5px 0 0;
            transition: height 0.3s ease;
        }
        .report-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
        .report-stats p {
            padding: 0.5rem;
            background-color: var(--accent-color);
            border-radius: 5px;
            text-align: center;
        }
    `;
    document.head.appendChild(style);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Customer Journey Flowchart Implementation
document.addEventListener('DOMContentLoaded', function() {
    const flowchartContainer = document.createElement('div');
    flowchartContainer.className = 'flowchart-container';
    document.body.appendChild(flowchartContainer);

    // Flowchart stages data
    const stages = [
        {
            id: 'initial-contact',
            title: '1. Initial Contact',
            icon: 'handshake',
            description: 'Handle new customer inquiries and create their profile',
            actions: ['Add New Contact', 'View Checklist'],
            checklist: [
                'Collect customer contact information',
                'Ask about their pet\'s needs and history',
                'Explain available services',
                'Schedule initial assessment if needed'
            ]
        },
        {
            id: 'service-assessment',
            title: '2. Service Assessment',
            icon: 'clipboard-check',
            description: 'Evaluate pet\'s needs and recommend services',
            actions: ['Schedule Assessment', 'View Services'],
            services: [
                { name: 'Daycare', desc: 'Socialization and play in supervised groups' },
                { name: 'Boarding', desc: 'Overnight care with comfort and attention' },
                { name: 'Grooming', desc: 'Professional grooming and spa services' },
                { name: 'Training', desc: 'Behavioral training and obedience classes' }
            ]
        },
        {
            id: 'service-booking',
            title: '3. Service Booking',
            icon: 'calendar-check',
            description: 'Schedule and manage service appointments',
            actions: ['Manage Calendar', 'View Guidelines'],
            guidelines: [
                'Verify vaccination records',
                'Check service availability',
                'Confirm booking details',
                'Send confirmation'
            ]
        },
        {
            id: 'service-delivery',
            title: '4. Service Delivery',
            icon: 'paw',
            description: 'Provide exceptional service and track progress',
            actions: ['View Standards', 'Update Status'],
            standards: [
                'Follow service protocols',
                'Document pet\'s activities',
                'Take progress photos/notes',
                'Monitor pet\'s well-being'
            ]
        },
        {
            id: 'follow-up',
            title: '5. Follow-up',
            icon: 'comments',
            description: 'Gather feedback and maintain customer relationship',
            actions: ['Follow-up Steps', 'Send Message'],
            steps: [
                'Send thank you message',
                'Request feedback/review',
                'Schedule next visit',
                'Add to loyalty program'
            ]
        }
    ];

    // Create flowchart stages
    stages.forEach((stage, index) => {
        const stageElement = createStageElement(stage, index);
        flowchartContainer.appendChild(stageElement);
    });

    // Helper function to create stage elements
    function createStageElement(stage, index) {
        const stageDiv = document.createElement('div');
        stageDiv.className = `stage ${index % 2 === 1 ? 'stage-right' : ''}`;
        stageDiv.id = stage.id;

        const content = `
            <div class="stage-content">
                <div class="stage-icon">
                    <i class="fas fa-${stage.icon}"></i>
                </div>
                <h2>${stage.title}</h2>
                <p>${stage.description}</p>
                <div class="stage-actions">
                    ${stage.actions.map(action => `
                        <button onclick="handleAction('${stage.id}', '${action}')">${action}</button>
                    `).join('')}
                </div>
            </div>
        `;

        stageDiv.innerHTML = content;
        return stageDiv;
    }

    // Handle action clicks
    window.handleAction = function(stageId, action) {
        const stage = stages.find(s => s.id === stageId);
        let modalContent = '';

        switch(action) {
            case 'View Checklist':
                modalContent = createListModal('Initial Contact Checklist', stage.checklist);
                break;
            case 'View Services':
                modalContent = createServicesModal(stage.services);
                break;
            case 'View Guidelines':
                modalContent = createListModal('Booking Guidelines', stage.guidelines);
                break;
            case 'View Standards':
                modalContent = createListModal('Service Standards', stage.standards);
                break;
            case 'Follow-up Steps':
                modalContent = createListModal('Follow-up Actions', stage.steps);
                break;
            default:
                return;
        }

        showModal(modalContent);
    };

    // Helper function to create list modal content
    function createListModal(title, items) {
        return `
            <h3>${title}</h3>
            <ul>
                ${items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }

    // Helper function to create services modal content
    function createServicesModal(services) {
        return `
            <h3>Service Options</h3>
            <div class="services-grid">
                ${services.map(service => `
                    <div class="service-card">
                        <h4>${service.name}</h4>
                        <p>${service.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Show modal function
    function showModal(content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                ${content}
                <button onclick="this.closest('.modal').remove()">Close</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
}); 