import JournalEntries from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">

            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <span> JE</span>
                </h3>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x" />
                <p className="mt-5">
                    New Entry
                </p>
            </div>

            <JournalEntries />
        
        </aside>
    )
}

export default Sidebar