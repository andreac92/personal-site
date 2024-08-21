"use client";

const DownloadResume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "AndreaCampos_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="text-magenta hover:text-plum font-medium"
      onClick={downloadResume}
    >
      Download my resume!
    </button>
  );
};

export default DownloadResume;
