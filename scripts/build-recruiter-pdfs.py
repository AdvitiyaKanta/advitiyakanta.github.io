from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image as PILImage
from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    Image,
    KeepTogether,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "downloads"
TEMP = ROOT.parent / "work" / "pdf-build"
OUTPUT.mkdir(parents=True, exist_ok=True)
TEMP.mkdir(parents=True, exist_ok=True)

INK = colors.HexColor("#18181B")
MID = colors.HexColor("#56565E")
FAINT = colors.HexColor("#7A7A82")
LINE = colors.HexColor("#D9D9D6")
ACCENT = colors.HexColor("#A66F18")
PAPER = colors.HexColor("#FFFFFF")

styles = getSampleStyleSheet()


def style(name: str, **kwargs) -> ParagraphStyle:
    return ParagraphStyle(name, parent=styles["Normal"], **kwargs)


TITLE = style(
    "TitleCustom", fontName="Helvetica-Bold", fontSize=22, leading=24,
    textColor=INK, spaceAfter=2, letterSpacing=0.3,
)
ROLE = style(
    "Role", fontName="Helvetica", fontSize=11, leading=13,
    textColor=MID, spaceAfter=7,
)
CONTACT = style(
    "Contact", fontName="Helvetica", fontSize=8.5, leading=11,
    textColor=MID, spaceAfter=8,
)
SECTION = style(
    "Section", fontName="Helvetica-Bold", fontSize=9, leading=11,
    textColor=INK, spaceBefore=6, spaceAfter=3, letterSpacing=1.2,
)
BODY = style(
    "Body", fontName="Helvetica", fontSize=9, leading=11.7,
    textColor=INK, spaceAfter=2.7,
)
BODY_SMALL = style(
    "BodySmall", fontName="Helvetica", fontSize=8.5, leading=11,
    textColor=MID, spaceAfter=2,
)
LABEL = style(
    "Label", fontName="Helvetica-Bold", fontSize=9.2, leading=11,
    textColor=INK, spaceAfter=0.5,
)
META = style(
    "Meta", fontName="Helvetica", fontSize=8, leading=10,
    textColor=FAINT, spaceAfter=2,
)
BULLET = style(
    "Bullet", fontName="Helvetica", fontSize=8.6, leading=10.8,
    textColor=INK, leftIndent=9, firstLineIndent=-7, spaceAfter=1.5,
)
FOOTER = style(
    "Footer", fontName="Helvetica", fontSize=7.5, leading=9,
    textColor=FAINT, alignment=TA_RIGHT,
)

SAMPLE_TITLE = style(
    "SampleTitle", fontName="Helvetica-Bold", fontSize=20, leading=22,
    textColor=INK, spaceAfter=3,
)
SAMPLE_META = style(
    "SampleMeta", fontName="Helvetica-Bold", fontSize=8.1, leading=10.3,
    textColor=ACCENT, spaceAfter=9, letterSpacing=0.3,
)
SAMPLE_HEADING = style(
    "SampleHeading", fontName="Helvetica-Bold", fontSize=9.2, leading=11,
    textColor=INK, spaceBefore=5, spaceAfter=3, letterSpacing=0.8,
)
SAMPLE_BODY = style(
    "SampleBody", fontName="Helvetica", fontSize=9, leading=11.8,
    textColor=INK, spaceAfter=4,
)
CALLOUT_LABEL = style(
    "CalloutLabel", fontName="Helvetica-Bold", fontSize=8.5, leading=10,
    textColor=ACCENT, spaceAfter=2, letterSpacing=0.7,
)
CALLOUT = style(
    "Callout", fontName="Helvetica", fontSize=8.8, leading=11.4,
    textColor=INK,
)
CAPTION = style(
    "Caption", fontName="Helvetica", fontSize=8, leading=9.5,
    textColor=MID, spaceBefore=2,
)
ATTRIBUTION = style(
    "Attribution", fontName="Helvetica", fontSize=8.5, leading=10.6,
    textColor=MID,
)


def p(text: str, paragraph_style: ParagraphStyle = BODY) -> Paragraph:
    return Paragraph(text, paragraph_style)


def bullet(text: str) -> Paragraph:
    return Paragraph(f"- {text}", BULLET)


def section_heading(text: str) -> list:
    return [p(text.upper(), SECTION), HRFlowable(width="100%", thickness=0.45, color=LINE, spaceAfter=3)]


def role_block(title: str, dates: str, meta: str, bullets: Iterable[str]):
    row = Table(
        [[p(title, LABEL), p(dates, ParagraphStyle("Date", parent=META, alignment=TA_RIGHT))]],
        colWidths=[132 * mm, 37 * mm],
    )
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return KeepTogether([row, p(meta, META), *[bullet(item) for item in bullets], Spacer(1, 1.6 * mm)])


def scrub_metadata(source: Path, destination: Path, title: str) -> None:
    reader = PdfReader(source)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)
    writer.metadata = None
    writer.add_metadata({"/Title": title})
    with destination.open("wb") as handle:
        writer.write(handle)


def build_cv() -> Path:
    temp = TEMP / "cv-source.pdf"
    final = OUTPUT / "Advitiya-Singh-Kanta-CV.pdf"
    doc = SimpleDocTemplate(
        str(temp), pagesize=A4, rightMargin=20 * mm, leftMargin=20 * mm,
        topMargin=15 * mm, bottomMargin=13 * mm, title="Advitiya Singh Kanta - Level Designer CV",
    )
    story = [
        p("ADVITIYA SINGH KANTA", TITLE),
        p("Level Designer", ROLE),
        p(
            "Dundee, United Kingdom &nbsp;|&nbsp; "
            "<link href='mailto:advitiyakanta@gmail.com' color='#56565E'>advitiyakanta@gmail.com</link> &nbsp;|&nbsp; "
            "<link href='https://advitiyakanta.github.io/' color='#56565E'>advitiyakanta.github.io</link> &nbsp;|&nbsp; "
            "<link href='https://www.linkedin.com/in/advitiyasinghkanta/' color='#56565E'>linkedin.com/in/advitiyasinghkanta</link>",
            CONTACT,
        ),
        *section_heading("Profile"),
        p(
            "Level Designer with seven months of commercial experience at Kahr Works on <i>Revolver Rift</i>, "
            "an announced AA PvPvE extraction shooter in development, built in Unreal Engine 5. Abertay MProf graduate focused on "
            "2D-to-3D spatial design, readable player flow, documentation and playtest-led iteration."
        ),
        *section_heading("Commercial experience"),
        role_block(
            "Level Designer - Kahr Works GmbH",
            "Dec 2024 - Jun 2025",
            "Revolver Rift - announced AA PvPvE extraction shooter in development - Unreal Engine 5",
            [
                "Created 2D layouts and playable compound blockouts for an in-development commercial title.",
                "Created more than 5 compound blockouts across the seven-month placement.",
                "Iterated navigation and pacing through team review in a multinational studio environment.",
            ],
        ),
        *section_heading("Selected Abertay MProf projects"),
        role_block(
            "To Pierce Eternity - Level Designer",
            "May - Aug 2026",
            "12-person academic team project responding to a Hyper Luminal Games client brief - Unreal Engine 5",
            [
                "Planned the player space through bubble diagrams and 2D layouts, then blocked every playable area.",
                "Redrew the spatial plan after scope cuts and held Level Design intent through team art integration.",
                "Changed safe-room guidance after client QA exposed ambiguous doors; owned chase flow and trap placement.",
            ],
        ),
        role_block(
            "Hull & Horizon - Lead Level Designer and Audio Lead",
            "Feb - May 2026",
            "Team of 5 academic project created to a V&amp;A Dundee client brief - Unreal Engine 5",
            [
                "Designed the first-person deck route, blockout, landmark hierarchy, spatial pacing and NPC placement.",
                "Synthesised ten museum-floor visitor sessions into onboarding, prompt, beat and ending revisions.",
                "Took on the Audio Lead scope in Week 6 while maintaining the Level Design deliverables.",
            ],
        ),
        role_block(
            "GoodBabies - Level Designer",
            "10-week project",
            "Abertay team prototype - Unreal Engine 5.6",
            [
                "Built a single-room layout around fixed-view readability, threat staging and beat-mapped pacing."
            ],
        ),
        *section_heading("Education"),
        role_block(
            "MProf Games Development - Abertay University",
            "2025 - 2026",
            "Dundee, United Kingdom",
            [],
        ),
        role_block(
            "BSc Game Design, Animation and VFX - Chandigarh University",
            "2022 - 2025",
            "India",
            [],
        ),
        *section_heading("Demonstrated skills"),
        p(
            "Unreal Engine 5 blockout and greybox; bubble diagrams, 2D layouts and beat maps; player flow, "
            "landmarks and sightlines; composition- and light-led guidance; pacing and environmental storytelling; "
            "playtest observation and iteration; Level Design documentation and collaboration; basic Level Blueprint, "
            "trigger and spline prototyping.",
            BODY_SMALL,
        ),
        Spacer(1, 2 * mm),
        p("Portfolio edition - 13 August 2026", FOOTER),
    ]
    doc.build(story)
    scrub_metadata(temp, final, "Advitiya Singh Kanta - Level Designer CV")
    return final


def scaled_image(path: Path, max_width: float, max_height: float) -> Image:
    with PILImage.open(path) as source:
        width, height = source.size
    ratio = min(max_width / width, max_height / height)
    return Image(str(path), width=width * ratio, height=height * ratio)


def visual_cell(image_path: Path, caption: str, width: float):
    visual = scaled_image(image_path, width, 33 * mm)
    return [visual, p(caption, CAPTION)]


def build_sample() -> Path:
    temp = TEMP / "tpe-source.pdf"
    final = OUTPUT / "To-Pierce-Eternity-Level-Design-Sample.pdf"
    doc = SimpleDocTemplate(
        str(temp), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
        topMargin=15 * mm, bottomMargin=14 * mm,
        title="To Pierce Eternity - Level Design Sample",
    )
    usable = A4[0] - 36 * mm
    cell_width = (usable - 8 * mm) / 3
    images = [
        visual_cell(ROOT / "assets/projects/to-pierce-eternity/bubble-diagram.jpg", "1. Revised spatial flow after the project scope changed.", cell_width),
        visual_cell(ROOT / "assets/projects/to-pierce-eternity/layout-2d-plan.jpg", "2. Critical path, room functions and commitment gates before blockout.", cell_width),
        visual_cell(ROOT / "assets/projects/to-pierce-eternity/sightline-plan.jpg", "3. Entity room sightline plan beside the final team-build view.", cell_width),
    ]
    visuals = Table(
        [[item[0] for item in images], [item[1] for item in images]],
        colWidths=[cell_width] * 3,
    )
    visuals.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("RIGHTPADDING", (-1, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))

    callout = Table(
        [[p("OBSERVATION -> CHANGE", CALLOUT_LABEL)], [p(
            "A client QA session found three identical doors and the safe-room exits ambiguous. The next day I "
            "added correct/blocked lighting and two distinction objects - a box and a guide wire - keeping truthful "
            "guidance in the environment rather than the unreliable HUD. Later observers independently identified "
            "the wire as readable guidance.",
            CALLOUT,
        )]],
        colWidths=[usable - 8 * mm],
    )
    callout.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F3F0EA")),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#D8C7A9")),
        ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, 0), 3.4 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 0),
        ("TOPPADDING", (0, 1), (-1, 1), 1 * mm),
        ("BOTTOMPADDING", (0, 1), (-1, 1), 3.6 * mm),
    ]))

    story = [
        p("TO PIERCE ETERNITY", SAMPLE_TITLE),
        p("LEVEL DESIGN SAMPLE | ABERTAY MPROF CLIENT-BRIEF TEAM PROJECT FOR HYPER LUMINAL GAMES | 2026 | UE5", SAMPLE_META),
        p("CONTEXT AND DESIGN PROBLEM", SAMPLE_HEADING),
        p(
            "The HUD deliberately misleads the player, so the environment must remain the reliable source of navigation. "
            "I designed the playable route to move from trust to suspicion and revelation through spatial distinction, "
            "leading lines, controlled sightlines and no-backtracking commitment points.",
            SAMPLE_BODY,
        ),
        p("MY OWNERSHIP AND BOUNDARIES", SAMPLE_HEADING),
        p(
            "I created the bubble diagram and digital 2D layout, blocked every playable space, placed guidance and gameplay "
            "beats, and owned the Underbelly chase route and trap placement. Puzzle Design and LDD co-authorship had a "
            "separate owner. Entity/HUD functionality, lighting execution, modular art, props, UI and audio had separate team owners.",
            SAMPLE_BODY,
        ),
        Spacer(1, 2 * mm),
        visuals,
        Spacer(1, 5 * mm),
        callout,
        Spacer(1, 6 * mm),
        HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=4),
        p(
            "Derived from <i>To Pierce Eternity - Level Design Document</i> (internal 18-page team document, 2026), "
            "credited by discipline to <b>Advitiya (Level Design)</b> and a separate Puzzle Design co-author. This recruiter "
            "excerpt includes only Advitiya Singh Kanta's verified Level Design scope and corroborated iteration evidence; "
            "puzzle specifications and team-owned systems are omitted. Abertay MProf client-brief project; not employment at Hyper Luminal Games.",
            ATTRIBUTION,
        ),
    ]
    doc.build(story)
    scrub_metadata(temp, final, "To Pierce Eternity - Level Design Sample")
    return final


if __name__ == "__main__":
    for artifact in (build_cv(), build_sample()):
        print(artifact)
