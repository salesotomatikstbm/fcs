import React from 'react'

function Wedo() {
    return (
        <div className="">
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1
                            className="title  text-center"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            style={{ marginBottom: "24px"}}
                        >
                            With First Choice Supplies, your business is always first!
                        </h1>

                        <div
                            className="between-area-main-wrapper"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="border rounded p-4 shadow-sm hover-shadow h-100">
                                        <h4 className="title mb-3" style={{ fontSize: "24px", fontWeight: "600" }}>
                                            Vision:
                                        </h4>
                                        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                                            To be the trusted name in simplifying solutions for corporates.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="border rounded p-4 shadow-sm hover-shadow h-100">
                                        <h4 className="title mb-3" style={{ fontSize: "24px", fontWeight: "600" }}>
                                            Mission:
                                        </h4>
                                        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
                                            Our mission is to empower businesses with a seamless blend of innovation, on-time delivery, dedicated support, out-of-the-box thinking, precise execution and enduring partnerships.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />

            {/* Custom CSS */}
            <style>{`
                .hover-shadow {
                    transition: box-shadow 0.3s ease-in-out;
                }
                .hover-shadow:hover {
                    box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </div>
    );
}

export default Wedo;
