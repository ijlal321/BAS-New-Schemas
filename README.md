# BAS-New-Schemas

## Project Documentation

---

### Submission 1: **VERIFY COUNTRY**

**UID:** 0x2944222a2dfae96b7d3fc16eba917ce56f12600c0992d187f21481b0ee2b4f1e

#### Project Overview:
- **Purpose:** The VERIFY COUNTRY project is designed to provide attestations that validate a person’s nationality or residency status. This verification can be used by various organizations or digital platforms requiring a verified country of residence for their users, such as for compliance, travel, or access to region-specific services.
- **Target Audience:** Organizations, digital platforms, and governments needing verified proof of residency or nationality.
- **Key Features:** Allows an on-chain attestation of a person’s country, ensuring that any identity-based services can rely on a decentralized, tamper-proof verification.

#### Schema:
- **Attributes:** 
  - **Country Name:** A string representing the country of the attestation.
  - **Person Address:** A `bytes32` field storing the unique address of the person being verified.

#### Technical Documentation:
The schema is structured as follows:
- `string Country Name`
- `bytes32 Person Address`

Each attestation on-chain verifies that a specific address belongs to a resident or citizen of the specified country.

#### Future Development Plan:
- **Expansion of Schema Fields:** Add fields such as verification date, verifier ID, and document ID to provide more context to each attestation.
- **Integration with Digital Identity Systems:** Collaborate with digital identity providers to create a more seamless, widely recognized verification process.
- **Automatic Verification with Government Databases:** Future plans could include integration with government databases to further automate the verification process.

---

### Submission 2: **UNIVERSITY ABC STUDENT**

**UID:** 0xdddb408331895ec81c43d709b01a2329758898abad2b5ac74a3795893ad8255f

#### Project Overview:
- **Purpose:** This project provides attestations to verify whether an individual is a student of "University ABC," which could be useful for offering student discounts, grants, or membership benefits.
- **Target Audience:** Educational institutions, companies offering student discounts, and platforms requiring student verification.
- **Key Features:** Enables a secure, blockchain-based attestation to confirm student status at University ABC.

#### Schema:
- **Attributes:**
  - **Student Address:** A `bytes32` field storing the unique address associated with the verified student.

#### Technical Documentation:
The schema contains one key field:
- `bytes32 Student Address`

Each attestation links a blockchain address with a valid student enrollment at University ABC.

#### Future Development Plan:
- **Course-Specific Attestations:** Extend schema to specify courses, programs, or academic levels.
- **Expiration Dates for Student Status:** Implement an expiration feature so attestations expire upon graduation or withdrawal.
- **Inter-University Verification Network:** Develop a network for cross-institutional recognition of verified student statuses.

---

### Submission 3: **UDEMY COURSE ABC STUDENT**

**UID:** 0x8773d8a1b36385da770347bd3ba832d676e05f7681bb9d5bf0518a3800acc703

#### Project Overview:
- **Purpose:** This project enables attestations that verify if a user has completed a specific Udemy course. This could be used for certifications, skill verification, or access to certain advanced course materials.
- **Target Audience:** E-learning platforms, employers validating skills, and online communities requiring course completion as a prerequisite.
- **Key Features:** Offers a blockchain-based attestation for individuals who have completed the specified course, ensuring transparency and reliability.

#### Schema:
- **Attributes:**
  - **Holder Address:** A `bytes32` field representing the address associated with the individual holding the course completion.

#### Technical Documentation:
The schema is composed of:
- `bytes32 Holder Address`

Each attestation on-chain serves as proof that the address owner has completed the Udemy course.

#### Future Development Plan:
- **Course Progress and Skill Level Attestation:** Add fields to verify the percentage of the course completed and skill level achieved.
- **Integration with Other Course Providers:** Expand attestation service to include certifications from other major course providers.
- **Verification Through Decentralized Identity:** Integrate with digital identity systems to facilitate seamless certification sharing.
