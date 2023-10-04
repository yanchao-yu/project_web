import React from 'react';
import './EditPage.css';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Editpage() {
    return (
        <div className="container2">

            <h2>Project Edit Page</h2>

            <form className="form2">
                <div className="flex">

                    <label htmlFor="Title" className="inline">
                        Module Title
                        <input type="text" name="Title" id="Title" className="inline-input" placeholder="Module Title" />
                    </label>
                    <label htmlFor="Title" className="inline">
                        Module ID
                        <input type="text" name="Title" id="Title" className="inline-input" placeholder="Module ID" />
                    </label>

                </div>

                <div className="flex">
                    <label htmlFor="Title" className="inline">
                        Project ID
                        <input type="text" name="Title" id="Title" className="inline-input" placeholder="Project ID" />
                    </label>
                    <label htmlFor="Title" className="inline">
                        Title
                        <input type="text" name="Title" id="Title" className="inline-input" placeholder="Title" />
                    </label>

                </div>

                <div className="flex">
                    <label htmlFor="Title" className="inline">
                        Difficulty Rate:
                    </label>
                    <div class="rating">
                        <span>?</span><span>?</span><span>?</span><span>?</span><span>?</span>
                    </div>
                    <label htmlFor="Title" className="inline">
                        Supervisor
                        <input type="text" name="Title" id="Title" className="inline-input" placeholder="Supervisor" />
                    </label>

                </div>

                <label htmlFor="Description" className="block">
                    Description
                    <textarea type="text" name="Description" id="Description" className="block-input" />

                </label>

                <label htmlFor="Description" className="block">
                    Required Skills
                    <textarea type="text" name="Description" id="Description" className="block-input" />

                </label>

                <label htmlFor="Title" className="inline">
                    Capacity:
                    <input type="text" name="Title" id="Title" className="inline-input" placeholder="0/5" />
                </label>

                <div>
                    <Button variant="primary" className="save-btn">Save</Button>{' '}
                    <Button variant="danger" className="remove-btn">Discard</Button>{' '}
                </div>
            </form>

        </div>

    );
}

export default Editpage